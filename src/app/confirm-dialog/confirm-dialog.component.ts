import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
obj
actParam
  constructor(
    private dialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.obj = data.obj
    this.actParam = data.actParam
  }

  ngOnInit() {
  }
  doCloseDialog(){
    this.dialogRef.close()
  }
  doApproveConfirm(){
    this.actParam()
    this.dialogRef.close()
  }
}
