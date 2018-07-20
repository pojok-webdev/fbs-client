import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { PageEvent } from '@angular/material';

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
  objColumns = ['id','name','fbcount','actions']
  pageEvent : PageEvent
  constructor(private client : ClientService) {
    this.client.getClients({segment:10,offset:0},result => {
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
    this.client.getClients({segment:10,offset:$event.pageIndex},result => {
      this.objs = result
      console.log("Obj",this.objs)
    })
  }
}
