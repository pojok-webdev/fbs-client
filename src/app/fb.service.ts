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
  generateFb(obj,callback){
    this.fb = this.http.get<any>(this.appconf.server+'/generatefb/'+obj.client_id)
    this.fb.subscribe(
      data => {
        console.log('FB generated',data)
        callback(data[0].genfb)
      },
      err => {
        console.log("FB generation error",err)
        callback(err)
      }
    )
  }
  getFbs(obj,callback){
    this.fbs = this.http.get<any>(this.appconf.server+'/getfbs/'+obj.client_id+'/'+obj.pageIndex+'/'+obj.pageSize)
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
  saveFb(obj,callback){
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
  updateFb(obj,callback){
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
  fbCount(obj,callback){
    this.fb = this.http.get<any>(this.appconf.server+'/getfbcount/'+obj.client_id)
    this.fb.subscribe(
      data => {
        console.log("FB COunt",data)
        callback(data[0].fbCount)
      },
      err => {
        console.log("Err FB Count",err)
        callback(err)
      }
    )
  }
}
