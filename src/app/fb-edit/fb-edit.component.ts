import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FbService } from '../fb.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PicService } from '../pic.service';
import { PadiserviceService } from '../padiservice.service';
import { FbFeeAddComponent } from '../fb-fee-add/fb-fee-add.component';
import { FbfeeService } from '../fbfee.service';
import { FbServiceAddComponent } from '../fb-service-add/fb-service-add.component';
import { PicAddComponent } from '../pic-add/pic-add.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-fb-edit',
  templateUrl: './fb-edit.component.html',
  styleUrls: ['./fb-edit.component.css']
})
export class FbEditComponent implements OnInit {
  obj = {
    client_id:'',
    upstr:'',
    dnstr:''
  } 
  feeobj = {}
  that = this
  picsColumn : String[] = ['name','role','position','idnum','phone','hp','email','actions']
  picsDS = new MatTableDataSource()
  serviceColumns : String[] = ['category','upstr','dnstr','bandwidth','actions']
  serviceDS = new MatTableDataSource()
  feeDS = new MatTableDataSource()
  feeColumns : String[] = ['name','dpp','ppn','actions']
  fee = {
    name:''
  }
  constructor(
    private fb : FbService,
    private pic : PicService,
    private padiService : PadiserviceService,
    private route : ActivatedRoute,
    private dialog : MatDialog,
    private datePipe : DatePipe,
    private _fee : FbfeeService
  ) {
    this.fb.getFb({nofb:this.route.snapshot.params.nofb},result => {
      console.log("selected FB",result)
      this.obj = result
    })
    this.reloadPicDS()
    this.reloadServiceDS()
    this.reloadFeeDS()
  }
  updateFb(obj){
    obj.period1 = this.datePipe.transform(obj.period1,'yyy-MM-dd').toString()
    obj.period2 = this.datePipe.transform(obj.period2,'yyy-MM-dd')
    obj.activationdate = this.datePipe.transform(obj.activationdate,'yyy-MM-dd')
    this.fb.updateFb(obj, result => {
      console.log("Success update",result)
      window.location.href = '/fbs/'+this.obj.client_id+'/0/10'
    })
  }
  addFeeDialog(_obj){
    console.log("Obj",_obj)
    _obj.nofb = this.route.snapshot.params.nofb
    this.dialog.open(FbFeeAddComponent,{
      width: '500px',
      data: {
        obj:_obj,
        action:'create'
      }
    })
    .afterClosed()
    .subscribe(
      result =>{
        console.log("After Close",result)
        this.reloadFeeDS()
      }
    )
  }
  editFeeDialog(fee){
    this.dialog.open(FbFeeAddComponent,{
      width:'500px',
      data:{
        obj:fee,
        action:'update'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        this.reloadFeeDS()
      }
    )
  }
  removeFee(fee){
    fee.nofb = this.route.snapshot.params.nofb
    this._fee.removeFee(fee, result => {
      console.log("Result",result)
      this.reloadFeeDS()
    })
  }
  addServiceDialog(_obj){
    _obj.nofb = this.route.snapshot.params.nofb
    this.dialog.open(FbServiceAddComponent,{
      width: '500px',
      data:{
        obj:_obj,
        action:'create'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        console.log('After Close Service Dialog',data)
        this.reloadServiceDS()
      }
    )
  }
  editServiceDialog(_obj){
    this.dialog.open(FbServiceAddComponent,{
      width:'500px',
      data:{
        obj:_obj,
        action:'update'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        console.log(data)
        this.reloadServiceDS()
      }
    )
  }
  addPICDialog(pic){
    console.log("PIC tosend",pic)
    this.dialog.open(PicAddComponent,{
      data:{
        fb_id:this.route.snapshot.params.nofb,
        action:'create'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        console.log(data)
        this.reloadPicDS()
      }
    )
  }
  editPicDialog(pic){
    this.dialog.open(PicAddComponent,{
      width:'500px',
      data:{
        obj:pic,
        action:'update'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        console.log(data)
        this.reloadPicDS()
      }
    )
  }
  removePicDialog(pic){
    this.dialog.open(ConfirmDialogComponent,{
      width:'500px',
      data:{
        obj:pic,
        objtype:'removepic',
        actParam:()=>{
          console.log('Pic received',pic)
            this.pic.removePic(pic,result => {
            this.reloadPicDS()
          })
        }
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        console.log(data)
      }
    )
  }
  reloadFeeDS(){
    this._fee.getFees({nofb:this.route.snapshot.params.nofb}, result => {
      this.feeDS = new MatTableDataSource(result)
    } )
  }
  reloadServiceDS(){
    this.padiService.getServices({fb_id:this.route.snapshot.params.nofb}, result => {
      console.log('reload service',result)
      this.serviceDS = new MatTableDataSource(result)
    })
  }
  reloadPicDS(){
    this.pic.getPics({nofb:this.route.snapshot.params.nofb},result => {
      console.log('reload pics',result)
      this.picsDS = new MatTableDataSource(result)
    })
  }
  ngOnInit() {
  }

}
