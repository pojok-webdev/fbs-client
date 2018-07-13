import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppconfService } from './appconf.service';

@Injectable({
  providedIn: 'root'
})
export class PadiserviceService {
padiservice : Observable<any>
padiservices : Observable<any[]>
  constructor(private http: HttpClient,private appconf:AppconfService) {}
  getServices(obj,callback){
    this.padiservices = this.http.get<any[]>(this.appconf.server+'/getservices/'+obj.fb_id)
    this.padiservices.subscribe(
      data => {
        console.log("Success",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getService(obj, callback){
    this.padiservice = this.http.get<any>(this.appconf.server+'/getservice/'+obj.id)
    this.padiservice.subscribe(
      data => {
        console.log("Success",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
  saveService(obj,callback){
    this.padiservice = this.http.post<any[]>(this.appconf.server+'/saveservice/',obj)
    this.padiservice.subscribe(
      data => {
        console.log("Success",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  updateService(obj, callback){
    this.padiservice = this.http.post<any>(this.appconf.server+'/updateservice',obj)
    this.padiservice.subscribe(
      data => {
        console.log("Success",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
}
