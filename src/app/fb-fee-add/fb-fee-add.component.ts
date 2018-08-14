import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material'
import { FbfeeService } from '../fbfee.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { FbEditComponent } from '../fb-edit/fb-edit.component';
@Component({
  selector: 'app-fb-fee-add',
  templateUrl: './fb-fee-add.component.html',
  styleUrls: ['./fb-fee-add.component.css']
})
export class FbFeeAddComponent implements OnInit {
fee = {
  name:'',
  dpp:0,
  ppn:0,
  client_id:127,
  nofb:'',
  createuser:'anonymous'
}
  constructor(
    public dialogRef : MatDialogRef<FbFeeAddComponent>,
    private fbfee : FbfeeService,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    switch(this.data.action){
      case 'update':
      console.log('OBJ received',this.data.obj)
        this.fbfee.getFee({
          client_id:this.data.obj.client_id,
          name:this.data.obj.name,
          nofb:this.data.obj.nofb
        },result => {
          this.fee = result
        })
      break
      case 'create':
        this.fee.nofb = this.data.obj.nofb
        this.fee.dpp = this.data.obj.dpp
        this.fee.ppn = this.data.obj.ppn
        this.fee.name = this.data.obj.name
      break
      }
  }
  closeDialog(){
    this.dialogRef.close()
  }
  saveFee(obj){
    console.log('Action',this.data.action)
    switch(this.data.action){
      case 'create':
        console.log("Fee",obj)
        obj.client_id = 0
        this.fbfee.saveFee(obj, result => {
          console.log("success save fee",result)
          this.dialogRef.close()
        })  
      break
      case 'update':
      console.log('Obj',obj)
        this.fbfee.updateFee(obj, result => {
          console.log('Success update fee',result)
          this.dialogRef.close()
        })
      break
    }
  }
  ngOnInit() {
  }
  updatePpn(){
    this.fee.ppn = (this.fee.dpp/10)
  }
}
