import { Component, OnInit } from '@angular/core';
import { PicService } from './../pic.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {
  displayedColumns = [
    'name','role','position','idnum','phone','hp','email','action'
  ]
  pics
  constructor(private pic : PicService, private route: ActivatedRoute) {
    this.pic.getPics({nofb:this.route.snapshot.params.nofb},result => {
      console.log("Pics",result)
      this.pics = result
    })
  }

  ngOnInit() {
  }

}
