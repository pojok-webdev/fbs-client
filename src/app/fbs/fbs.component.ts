import { Component, OnInit } from '@angular/core';
import { FbService } from './../fb.service'
import { MatTableDataSource } from '@angular/material'
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private fb: FbService,private auth:AuthService,private route : ActivatedRoute) {
    this.auth.isLogin((result,msg) => {
      if(result){
        console.log("Anda telah Login",msg)
        this.reloadFB()
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
  doRemoveFb(element){
    console.log('Element',element)
    this.fb.removeFb(element,result => {
      console.log(result)
      this.reloadFB()
    })
  }
  ngOnInit() {
  }
}
