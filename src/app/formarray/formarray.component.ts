import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})

export class FormarrayComponent implements OnInit {
  cities :mycity[] = [
    {controls:'a'},{controls:'b'}
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
export interface mycity{
  controls:String
}
