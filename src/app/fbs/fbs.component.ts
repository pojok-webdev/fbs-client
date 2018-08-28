import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { FbService } from './../fb.service'
import { MatTableDataSource, MatDialog } from '@angular/material'
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ClientService } from '../client.service';


@Pipe({name:'showHumanStatus'})
export class showHumanStatusPipe implements PipeTransform{
  transform(value:string):string{
    let humanStatus
    switch(value){
      case '0':
      humanStatus = 'ignore'
      break 
      case '1':
      humanStatus = 'valid'
      break 
      case '2':
      humanStatus = 'canceled'
      break 
      case '3':
      humanStatus = 'expired'
      break 
    }
    return humanStatus
  }
}



@Component({
  selector: 'app-fbs',
  templateUrl: './fbs.component.html',
  styleUrls: ['./fbs.component.css']
})
export class FbsComponent implements OnInit {
  fbs:any[]
  dataSource = new MatTableDataSource(this.fbs)
  displayedColumns = ['name','nofb','siup','npwp','sppkp','address','city','period1','period2','actions']
  fbcount
  fbPageSize = 10
  fbPageSizeOptions = [
    5,10,15
  ]
  obj = {
    name:'',
    id:'',
    status:''
  }
  constructor(
    private fb: FbService,
    private client : ClientService,
    private auth:AuthService,
    private route : ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.auth.isLogin((result,msg) => {
      if(result){
        console.log("Anda telah Login",msg)
        this.reloadFB()
        this.client.getClient({id:this.route.snapshot.params.client_id},result => {
          console.log('getClient',result)
          this.obj = result
        })
      }else{
        console.log("Error Login",msg)
        window.location.href = "/login"
      }
    })
  }
  reloadFB(){
    this.fb.getFbs({
      client_id:this.route.snapshot.params.client_id,
      pageIndex:this.route.snapshot.params.pageIndex,
      pageSize:this.route.snapshot.params.pageSize
    },result=>{
      this.dataSource = new MatTableDataSource(result)
      console.log('reloadFB',result)
    })
    this.fb.fbCount({client_id:this.route.snapshot.params.client_id},result => {
      this.fbcount = result
    })
  }
  reloadData(ev){
    console.log("Event",ev)
    this.auth.isLogin((result,msg) => {
      if(result){
        console.log("Anda telah Login",msg)
        this.fb.getFbs({
          client_id:this.route.snapshot.params.client_id,
          pageIndex:(ev.pageIndex*ev.pageSize),
          pageSize:ev.pageSize
        },result=>{
          this.dataSource = new MatTableDataSource(result)
        })
        this.fb.fbCount({client_id:this.route.snapshot.params.client_id},result => {
          this.fbcount = result
        })
      }else{
        console.log("Error Login",msg)
        window.location.href = "/login"
      }
    })
  }
  confirmRemoveFb(obj){
    this.dialog.open(ConfirmDialogComponent,{
      width:'500px',
      data:{
        obj:obj,
        objtype:'removefb',
        actParam:() => {
          this.fb.removeFb(obj, result => {
            console.log('remove result',result)
            this.reloadFB()
          })
        }
      }
    })
  }
  doRemoveFb(element){
    console.log('Element',element)
    this.fb.removeFb(element,result => {
      console.log(result)
      this.reloadFB()
    })
  }
  ngOnInit() {
  }
  getHumanStatus(status){
    let out
    switch (status){
      case '0':
        out = 'ignored'
      break;
      case '1':
        out = 'valid'
      break;
      case '2':
        out = 'canceled'
      break;
      case '3':
        out = 'expired'
      break;
    }
    return out
  }
  changeStatus(element,status){
    element.status = status
    element.period1 = this.changeDateformat(element.period1)
    element.period2 = this.changeDateformat(element.period2)
    element.activationdate = this.changeDateformat(element.activationdate)
    this.fb.updateFb(element, result => {
      console.log("Success update status",result)
    })
  }
  changeDateformat(date){
    let out = date.split("T")
    return out[0]
  }
}
