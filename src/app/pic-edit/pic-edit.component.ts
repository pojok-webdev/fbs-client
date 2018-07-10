import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PicService } from '../pic.service';

@Component({
  selector: 'app-pic-edit',
  templateUrl: './pic-edit.component.html',
  styleUrls: ['./pic-edit.component.css']
})
export class PicEditComponent implements OnInit {
  obj = {}
  
  constructor(private route : ActivatedRoute,private pic : PicService) {
    this.pic.getPic({nofb:route.snapshot.params.nofb,role:route.snapshot.params.role},result => {
      console.log("get pic",result)
      this.obj = result
    })
  }
  updatePic(obj){
    this.pic.updatePic(obj, result => {
      console.log("Success update pic",result)
      window.location.href = "/pics/"+this.route.snapshot.params.nofb
    })
  }
  ngOnInit() {
  }

}
