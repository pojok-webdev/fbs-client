import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globalVars } from './globalVars';

@Injectable({
  providedIn: 'root'
})
export class FbfeeService {
  fee : Observable<any>
fees : Observable<any[]>
  constructor(private http : HttpClient,private appvar :globalVars) { }
  getFees(callback){
    this.fees = this.http.get<any[]>(this.appvar.server  +'/getfees')
    this.fees.subscribe(
      data => {
        console.log("getFees Result",data)
        callback(data)
      },
      err => {
        console.log("getFees Err",err)
        callback(err)
      }
    )
  }
  getFee(obj,callback){
    this.fee = this.http.post<any>(this.appvar.server +'/getfee',obj)
    this.fee.subscribe(
      data => {
        console.log("getFee Result",data)
        callback(data)
      },
      err => {
        console.log("getFee Error",err)
        callback(err)
      }
    )
  }
  saveFee(obj,callback){
    this.fee = this.http.post<any>(this.appvar.server + '/savefee',obj)
    this.fee.subscribe(
      data => {
        console.log("savefb result",data)
        callback(data)
      },
      err => {
        console.log("savefb error",err)
        callback(err)
      }
    )
  }
  updateFb(obj,callback){
    this.fee = this.http.post<any>(this.appvar.server + '/updatefb',obj)
    this.fee.subscribe(
      data => {
        console.log("updatefb success",data)
        callback(data)
      },
      err => {
        console.log("updatefb err",err)
        callback(err)
      }
    )
  }
}
