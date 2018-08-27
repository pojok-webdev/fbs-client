import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppconfService } from './appconf.service';

@Injectable({
  providedIn: 'root'
})
export class FbfeeService {
  fee : Observable<any>
  fees : Observable<any[]>
  constructor(private http : HttpClient,private appvar :AppconfService) { }
  getFees(obj,callback){
    this.fees = this.http.post<any[]>(this.appvar.server  +'/getfees',obj)
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
        callback(data[0])
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
  updateFee(obj,callback){
    console.log('update Fee invoked',obj)
    this.fee = this.http.post<any>(this.appvar.server + '/updatefee',obj)
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
  removeFee(obj,callback){
    this.fee = this.http.post<any>(this.appvar.server + '/removefee',obj)
    this.fee.subscribe(
      data => {
        console.log("remove fee success",data)
        callback(data)
      },
      err => {
        console.log("remove fee err", err)
        callback(err)
      }
    )
  }
}
