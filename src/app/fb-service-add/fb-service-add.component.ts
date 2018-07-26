import { Component, OnInit } from '@angular/core';
import { PadiserviceService } from '../padiservice.service';

@Component({
  selector: 'app-fb-service-add',
  templateUrl: './fb-service-add.component.html',
  styleUrls: ['./fb-service-add.component.css']
})
export class FbServiceAddComponent implements OnInit {
clientservice=''
  constructor(private padiservice:PadiserviceService) { }
  enterprisesUpM = this.padiservice.getNumRange(0,100)
  enterprisesUpK = this.padiservice.getNumRange(1,7,128)
  enterprisesDownM = this.padiservice.getNumRange(0,100)
  enterprisesDownK = this.padiservice.getNumRange(1,6,128)
  businessVals = this.padiservice.getNumRange(1,4,2,'Mbps')
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
  sbi = ['3 Mbps','5 Mbps','8 Mbps','10 Mbps']
  padicluster = ['Up to 5','Up to 7','Up to 10']
  colocation_model
  ngOnInit() {
  }
  doSaveService(){
    console.log("Service choosed",this.clientservice)
  }
}
