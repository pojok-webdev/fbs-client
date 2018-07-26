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
    this.fee.nofb = this.data.obj.nofb
    this.fee.dpp = this.data.obj.dpp
    this.fee.ppn = this.data.obj.ppn
    this.fee.name = this.data.obj.name
  }
  closeDialog(){
    this.dialogRef.close()
  }
  saveFee(obj){
    console.log("Fee",obj)
    obj.client_id = 0
    this.fbfee.saveFee(obj, result => {
      console.log("success save fee",result)
      this.dialogRef.close()
    })
  }
  ngOnInit() {
  }
  updatePpn(){
    this.fee.ppn = (this.fee.dpp/10)
  }
}
