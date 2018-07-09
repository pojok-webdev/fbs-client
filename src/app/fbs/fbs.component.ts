import { Component, OnInit } from '@angular/core';
import { FbService } from './../fb.service'
import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-fbs',
  templateUrl: './fbs.component.html',
  styleUrls: ['./fbs.component.css']
})
export class FbsComponent implements OnInit {
  fbs:any[]
  dataSource = new MatTableDataSource(this.fbs)
  displayedColumns = ['name','nofb','siup','npwp','sppkp','address','city','period1','period2','actions']
  constructor(private fb: FbService) {
    this.fb.getFbs(result=>{
      this.dataSource = new MatTableDataSource(result)
    })
  }

  ngOnInit() {
  }

}
