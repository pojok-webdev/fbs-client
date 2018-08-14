import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppconfService } from './appconf.service';
import { PLATFORM_WORKER_APP_ID } from '@angular/common/src/platform_id';

@Injectable({
  providedIn: 'root'
})
export class PadiserviceService {
padiservice : Observable<any>
padiservices : Observable<any[]>
  constructor(private http: HttpClient,private appconf:AppconfService) {}
  getServices(obj,callback){
    console.log('OBJ accepted',obj)
    this.padiservices = this.http.get<any[]>(this.appconf.server+'/getservices/'+obj.fb_id)
    this.padiservices.subscribe(
      data => {
        console.log('getServices Obj FB ID',obj.fb_id)
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
        console.log('Obj ID',obj.id)
        console.log("Success",data)
        callback(data[0])
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
  addPrefix(prefix,outlength,str){
    str = str.toString()
    for(let i = str.length; i <= outlength ; i++){
      str=prefix+str
    }
    return str.toString()
  }
  getNumRange(start,end,step=1,unit=''){
    let out = []
    for(let x = start;x <= end; x++){
      let _x = this.addPrefix('0',2,x*step)
      out[x] = this.addPrefix('0',2,x*step)+' '+unit//x
    }
    return out
  }
  getKbps(start,end){
    let out = []
    for(let x = start; x <= end; x++){
      out[x] = Math.pow(2,x)
    }
    return out
  }
}
