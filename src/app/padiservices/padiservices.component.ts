import { Component, OnInit } from '@angular/core';
import { PadiserviceService } from '../padiservice.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FbServiceAddComponent } from '../fb-service-add/fb-service-add.component';

@Component({
  selector: 'app-padiservices',
  templateUrl: './padiservices.component.html',
  styleUrls: ['./padiservices.component.css']
})
export class PadiservicesComponent implements OnInit {
  serviceDS = new MatTableDataSource()
  serviceColumns = ["category","bandwidth","actions"]
  constructor(
    private padiservices : PadiserviceService,
    private route: ActivatedRoute,
    private dialog:MatDialog
  ) {
    this.padiservices.getServices({fb_id:route.snapshot.params.fb_id},result => {
      console.log("Result",result)
      this.serviceDS = new MatTableDataSource(result)
    })
  }

  ngOnInit() {
  }
  addServiceDialog(){
  }
  
}
