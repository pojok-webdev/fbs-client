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
    console.log('data sent',data)
    switch(this.data.action){
      case 'update':
        this.pic = data.obj
      break
      case 'create':
        console.log('id', this.data)
        this.pic.nofb = this.data.fb_id  
      break
    }
  }

  ngOnInit() {
  }
  closeButton(){
    this.dialog.close()
  }
  savePic(pic){
    switch(this.data.action){
      case 'create':
      console.log('Pic to save',pic)
      this.picservice.savePic(pic,result => {
        console.log('save pic',result)
      })
    break
    case 'update':
      this.picservice.updatePic(pic,result => {
        console.log('update pic',result)
      })
    break
    }
    this.dialog.close()
  }
}
