import { Component, OnInit, Inject } from '@angular/core';
import { PadiserviceService } from '../padiservice.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-fb-service-add',
  templateUrl: './fb-service-add.component.html',
  styleUrls: ['./fb-service-add.component.css']
})
export class FbServiceAddComponent implements OnInit {
  obj = {
    category:'',
    name:'',
    fb_id:'',
    createuser:'anonymous',
    bwtype:'',
    upm:'',
    upk:'',
    upstr:'',
    dnm:'',
    dnk:'',
    dnstr:'',
    space:'',
    bandwidth:'',
    customservice:''
  }
  constructor(
    private padiservice:PadiserviceService,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {
    console.log("No FB",this.data)
    this.obj.fb_id = this.data.obj.nofb
  }
  enterprisesUpM = this.padiservice.getNumRange(0,100)
  enterprisesUpK = this.padiservice.getNumRange(1,7,128)
  enterprisesDownM = this.padiservice.getNumRange(0,100)
  enterprisesDownK = this.padiservice.getNumRange(1,6,128)
  businessVals = this.padiservice.getNumRange(1,4,2,'')
  colocation = {
    space:['Desktop PC Server','2 U','4 U','1/2 Rack','Full Rack'],
    bw:['Up to 1 Mb','Custom']
  }
  colocation_custom = {
    UpM:this.padiservice.getNumRange(0,100),
    UpK:this.padiservice.getNumRange(1,7,128),
    DnM:this.padiservice.getNumRange(0,100),
    DnK:this.padiservice.getNumRange(1,7,128)
  }
  sbi = ['03 Mbps','5 Mbps','8 Mbps','10 Mbps']
  padicluster = ['Up to 5','Up to 7','Up to 10']
  colocation_model
  ngOnInit() {
  }
  setUpStr(){
    console.log("UPM",this.obj.upm)
    console.log("UPK",this.obj.upk)
    this.obj.upstr = this.obj.upm+','+this.obj.upk 
  }
  setDnStr(){
    console.log("DNM",this.obj.dnm)
    console.log("DNK",this.obj.dnk)
    this.obj.dnstr = this.obj.dnm+','+this.obj.dnk 
  }
  clearInput(){
    this.obj = {
      category:'',
      name:'',
      fb_id:this.obj.fb_id,
      createuser:'anonymous',
      bwtype:'',
      upm:'',
      upk:'',
      upstr:'',
      dnm:'',
      dnk:'',
      dnstr:'',
      space:'',
      bandwidth:'',
      customservice:''
    }
  }
  doSaveService(){
    console.log("Service choosed",this.obj)
    this.padiservice.saveService(this.obj, result => {
      console.log("Save Service",result)
    })
  }
}
