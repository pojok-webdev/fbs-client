import { Component, OnInit } from '@angular/core';
import { PadiserviceService } from '../padiservice.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-padiservices',
  templateUrl: './padiservices.component.html',
  styleUrls: ['./padiservices.component.css']
})
export class PadiservicesComponent implements OnInit {
  serviceDS = new MatTableDataSource()
  serviceColumns = ["category","bandwidth","actions"]
  constructor(private padiservices : PadiserviceService,private route: ActivatedRoute) {
    this.padiservices.getServices({fb_id:route.snapshot.params.fb_id},result => {
      console.log("Result",result)
      this.serviceDS = new MatTableDataSource(result)
    })
  }

  ngOnInit() {
  }

}
