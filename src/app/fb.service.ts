import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http'
import { AppconfService } from './appconf.service'
@Injectable({
  providedIn: 'root'
})
export class FbService {
  fb:Observable<any>
    fbs:Observable<any[]>
  constructor(private http : HttpClient,private appconf: AppconfService) {
  }
  getFbs(callback){
    this.fbs = this.http.get<any>(this.appconf.server+'/getfbs')
    this.fbs.subscribe(
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
  getFb(obj,callback){
    this.fb = this.http.get<any>(this.appconf.server+'/getfb/'+obj.nofb)
    this.fb.subscribe(
      data => {
        console.log("Success",data)
        callback(data[0])
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
  savetFb(obj,callback){
    this.fb = this.http.post<any>(this.appconf.server+'/savefb',obj)
    this.fb.subscribe(
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
  updatetFb(obj,callback){
    this.fb = this.http.post<any>(this.appconf.server+'/updatefb',obj)
    this.fb.subscribe(
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
