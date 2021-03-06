import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { PageEvent } from '@angular/material';
import { AppconfService } from '../appconf.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  length = 100
  pageSize = 10
  pageSizeOptions : number[] = [5,10,25]
  objs
  objColumns = ['id','name','fbcount','alias','address','actions']
  curPageSize=10
  curIndex=0
  searchdata = ''
  pageEvent : PageEvent
  constructor(private client : ClientService, private appconf : AppconfService) {
    this.client.getClients({segment:this.pageSize,offset:0},result => {
      this.objs = result
      console.log("Obj",this.objs)
    })
    this.client.getClientsLength(result => {
      console.log("Client Amount",result)
      this.length = result
    })
  }
  setPageSizeOptions(setPageSizeOptionsInput:string){
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str)
  }
  ngOnInit() {
  }
  changePage($event){
    console.log("Event",$event)
    this.curPageSize = $event.pageSize
    this.client.getClients({segment:$event.pageSize,offset:($event.pageIndex*this.curPageSize)},result => {
      this.objs = result
      this.curPageSize = $event.pageSize
      this.curIndex = $event.curIndex
      console.log("Obj",this.objs)
    })
  }
  clientSearch(clientname){
    let searchObj = {searchdata:clientname,offset:this.curPageSize,segment:this.curIndex}
    console.log("Client to search",clientname)
    this.client.searchClient(searchObj,result => {
      console.log("Search Result",result)
      this.objs = result
    })
    this.client.searchClientLength(searchObj, result => {
      console.log("Amount",result)
      this.length = result
    })
  }
  doSearch(key){
    console.log("Key",key)
    if (key==="Enter"){
      this.clientSearch(this.searchdata)
    }
  }
  setOrder(columnName){
    if(this.appconf.ordertype == "asc"){
      this.appconf.ordertype = "desc"
    }else{
      this.appconf.ordertype = "asc"
    }
    this.client.getClients({
      orderby:columnName,
      ordertype:this.appconf.ordertype,
      segment:this.pageSize,
      offset:0
    },result => {
      this.objs = result
      console.log("Obj",this.objs)
    })
    this.client.getClientsLength(result => {
      console.log("Client Amount",result)
      this.length = result
    })

  }
}
