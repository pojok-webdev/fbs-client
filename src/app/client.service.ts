import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppconfService } from './appconf.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client : Observable<any>
  clients : Observable<any[]>

  constructor(private http: HttpClient, private appconf : AppconfService) { }
  getClients(obj,callback){
    this.clients = this.http.get<any[]>(
      this.appconf.server+'/getclients/'+this.appconf.orderby+'/'+this.appconf.ordertype+'/'+obj.segment+'/'+obj.offset
    )
    this.clients.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getClientsLength(callback){
    this.client = this.http.get<any>(this.appconf.server+'/getclientslength')
    this.client.subscribe(
      data => {
        callback(data[0].cnt)
      },
      err => {
        callback(err)
      }
    )
  }
  getClient(obj,callback){
    this.client = this.http.get<any>(this.appconf.server+'/getclient/'+obj.id)
    this.client.subscribe(
      data => {
        console.log('getClient',data)
        callback(data[0])
      },
      err => {
        console.log('err getClient',err)
        callback(err)
      }
    )
  }
  searchClient(obj,callback){
    console.log("SearchObj",obj)
    this.clients = this.http.post<any[]>(this.appconf.server+'/searchclient',obj)
    this.clients.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  searchClientLength(obj,callback){
    this.client = this.http.post<any>(this.appconf.server+'/searchclientlength',obj)
    this.client.subscribe(
      data => {
        callback(data[0].cnt)
      },
      err => {
        callback(err)
      }
    )
  }
  saveClient(obj,callback){
    this.client = this.http.post<any>(this.appconf.server+'/saveclient',obj)
    this.client.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  updateClient(obj,callback){
    this.client = this.http.post<any>(this.appconf.server+'/updateclient',obj)
    this.client.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
