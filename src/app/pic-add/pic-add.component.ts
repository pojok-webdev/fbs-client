import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PicService } from '../pic.service';

@Component({
  selector: 'app-pic-add',
  templateUrl: './pic-add.component.html',
  styleUrls: ['./pic-add.component.css']
})
export class PicAddComponent implements OnInit {
  pic = {
    name:'',
    nofb:'',
    role:'',
    position:'',
    idnum:'',
    phone:'',
    hp:'',
    email:''
}

  constructor(
    private dialog:MatDialogRef<any>,
    private picservice:PicService,
    @Inject (MAT_DIALOG_DATA) public data :any
  ) {
    console.log('id', this.data)
    this.pic.nofb = this.data.fb_id
  }

  ngOnInit() {
  }
  closeButton(){
    this.dialog.close()
  }
  savePic(pic){
    console.log('Pic to save',pic)
    this.picservice.savePic(pic,result => {
      console.log('save pic',result)
    })
    this.dialog.close()
  }
}
