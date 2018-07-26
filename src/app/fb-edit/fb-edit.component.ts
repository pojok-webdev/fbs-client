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

@Component({
  selector: 'app-fb-edit',
  templateUrl: './fb-edit.component.html',
  styleUrls: ['./fb-edit.component.css']
})
export class FbEditComponent implements OnInit {
  obj = {
    client_id:''
  } 
  feeobj = {}
  that = this
  picsColumn : String[] = ['name','role','position','idnum','phone','hp','email','actions']
  picsDS = new MatTableDataSource()
  serviceColumns = ['category','bandwidth','actions']
  serviceDS = new MatTableDataSource()
  feeDS = new MatTableDataSource()
  feeColumns = ['name','dpp','ppn','actions']
  constructor(
    private fb:FbService,
    private pic : PicService,
    private padiService : PadiserviceService,
    private route : ActivatedRoute,
    private dialog : MatDialog,
    private datePipe: DatePipe,
    private fee:FbfeeService
  ) {
    this.fb.getFb({nofb:this.route.snapshot.params.nofb},result => {
      console.log("selected FB",result)
      this.obj = result
    })
    this.pic.getPics({nofb:this.route.snapshot.params.nofb},result => {
      console.log("PICS",result)
      this.picsDS = new MatTableDataSource(result)
    })
    this.padiService.getServices({fb_id:this.route.snapshot.params.nofb}, result => {
      console.log("Services",result)
      this.serviceDS = new MatTableDataSource(result)
    })
    this.fee.getFees({nofb:this.route.snapshot.params.nofb},result => {
      this.feeDS = new MatTableDataSource(result)
    })
  }
  updateFb(obj){
    console.log("UpdateFB invoked",this.obj)
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
        obj:_obj
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
  reloadFeeDS(){
    this.fee.getFees({nofb:this.route.snapshot.params.nofb}, result => {
      this.feeDS = new MatTableDataSource(result)
    } )
  }
  removeFee(fee){
    fee.nofb = this.route.snapshot.params.nofb
    this.fee.removeFee(fee, result => {
      console.log("Result",result)
      this.reloadFeeDS()
    })
  }
  addServiceDialog(_obj){
    _obj.nofb = this.route.snapshot.params.nofb
    this.dialog.open(FbServiceAddComponent,{
      width: '500px',
      data:{obj:_obj}
    })
    .afterClosed()
    .subscribe(
      data => {
        this.reloadServiceDS()
      }
    )
  }
  reloadServiceDS(){
    this.padiService.getServices({nofb:this.route.snapshot.params.nofb}, result => {
      this.serviceDS = new MatTableDataSource(result)
    })
  }
  ngOnInit() {
  }

}
