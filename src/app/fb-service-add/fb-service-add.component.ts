import { Component, OnInit, Inject } from '@angular/core';
import { PadiserviceService } from '../padiservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-fb-service-add',
  templateUrl: './fb-service-add.component.html',
  styleUrls: ['./fb-service-add.component.css']
})
export class FbServiceAddComponent implements OnInit {
  obj = {
    id:'',
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
    @Inject (MAT_DIALOG_DATA) public data:any,
    private dialog : MatDialogRef<any>
  ) {
    console.log("No FB",this.data.obj)
    this.obj.fb_id = this.data.obj.fb_id
    switch(this.data.action){
      case 'update':
        this.padiservice.getService({id:this.data.obj.id},result => {
          console.log("Result of getServc",result)
          this.obj.id = result.id
          this.obj.category = result.category
          this.obj.upm = result.upm
          this.obj.upk = result.upk
          this.obj.dnm = result.dnm
          this.obj.dnk = result.dnk
          this.obj.bandwidth = result.bandwidth
          this.obj.space = result.space
          this.obj.customservice = result.customservice
          this.obj.upstr = result.upstr
          this.obj.dnstr = result.dnstr
          this.obj.bwtype = result.bwtype
        })
      break;
      case 'create':
        console.log("create service invoked")
      break;
    }
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
      id:'',
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
    switch(this.data.action){
      case 'create':
        console.log("Service choosed",this.obj)
        this.padiservice.saveService(this.obj, result => {
          console.log("Save Service",result)
          this.dialog.close()
        })
      break
      case 'update':
        console.log('update invoked',this.obj)
        this.padiservice.updateService(this.obj, result => {
          console.log('Update service',result)
          this.dialog.close()
        })  
      break
    }
    
  }
}
