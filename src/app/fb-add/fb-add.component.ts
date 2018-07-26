import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material'
import { ActivatedRoute } from '@angular/router';
import { FbService } from '../fb.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-fb-add',
  templateUrl: './fb-add.component.html',
  styleUrls: ['./fb-add.component.css']
})
export class FbAddComponent implements OnInit {
  obj = {
    client_id:'',
    name:'',
    siup:'',
    npwp:'',
    address:'',
    city:'',
    nofb:''
  } 
  feeobj = {}
  that = this
  picsColumn : String[] = ['name','role','position','idnum','phone','hp','email','actions']
  picsDS = new MatTableDataSource()
  serviceColumns = ['category','bandwidth','actions']
  serviceDS = new MatTableDataSource()
  feeDS = new MatTableDataSource()
  feeColumns = ['name','dpp','ppn','actions']
  client
  constructor(private route : ActivatedRoute,private fb : FbService,private _client : ClientService) {
    this.obj.client_id = this.route.snapshot.params.client_id
    this._client.getClient({id:this.obj.client_id}, result => {
      console.log("Client",result)
      this.client = result
      this.obj.name = result.name
      this.obj.siup = result.siup
      this.obj.npwp = result.npwp
      this.obj.address = result.address
      this.obj.city = result.city
    })
    this.fb.generateFb({client_id:this.obj.client_id}, result => {
      this.obj.nofb = result
    })
  }
  saveFb(obj){
    console.log("FB Saved",obj)
    this.fb.saveFb(obj, result => {
      console.log("Save Result",result)
      window.location.href = '/fbedit/'+obj.nofb
    })
  }
  ngOnInit() {
  }

}
