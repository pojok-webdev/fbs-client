import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FbService } from '../fb.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material';
import { PicService } from '../pic.service';

@Component({
  selector: 'app-fb-edit',
  templateUrl: './fb-edit.component.html',
  styleUrls: ['./fb-edit.component.css']
})
export class FbEditComponent implements OnInit {
  obj = {} 
  picsColumn : String[] = ['name','role','position','idnum','phone','hp','email','actions']
  picsDS = new MatTableDataSource([
    {name: 'Bebob'},
    {name: 'Rocksteady'}
  ])

  constructor(private fb:FbService,private pic : PicService,private route : ActivatedRoute,private datePipe: DatePipe) {
    this.fb.getFb({nofb:this.route.snapshot.params.nofb},result => {
      console.log("selected FB",result)
      this.obj = result
    })
    this.pic.getPics({nofb:this.route.snapshot.params.nofb},result => {
      console.log("PICS",result)
      this.picsDS = new MatTableDataSource(result)
    })
  }
  updateFb(obj){
    console.log("UpdateFB invoked",this.obj)
    obj.period1 = this.datePipe.transform(obj.period1,'yyy-MM-dd').toString()
    obj.period2 = this.datePipe.transform(obj.period2,'yyy-MM-dd')
    obj.activationdate = this.datePipe.transform(obj.activationdate,'yyy-MM-dd')
    this.fb.updatetFb(obj, result => {
      console.log("Success update",result)
      window.location.href = '/fbs'
    })
  }
  ngOnInit() {
  }

}
