import { Component, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { FbfeeService } from '../fbfee.service';
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
  nofb:'SBY20180125000127000',
  createuser:'anonymous'
}
  constructor(
    public dialogRef : MatDialogRef<FbFeeAddComponent>,
    private fbfee : FbfeeService
  ) { }
  closeDialog(){
    this.dialogRef.close()
  }
  saveFee(obj){
    console.log("Fee",obj)
    this.fbfee.saveFee(obj, result => {
      console.log("success save fee",result)
    })
    this.dialogRef.close()
  }
  ngOnInit() {
  }

}
