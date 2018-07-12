import { Component, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-fb-fee-add',
  templateUrl: './fb-fee-add.component.html',
  styleUrls: ['./fb-fee-add.component.css']
})
export class FbFeeAddComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<FbFeeAddComponent>
  ) { }
  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
