import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AppconfService } from './appconf.service';
@Injectable({
  providedIn: 'root'
})
export class PicService {
pics : Observable<any[]>
pic : Observable<any>
  constructor(private http: HttpClient, private appconf : AppconfService) {}
  getPics(obj,callback){
    this.pics = this.http.get<any[]>(this.appconf.server+'/getpics/'+obj.nofb)
    this.pics.subscribe(
      data => {
        console.log("Result",data)
        callback(data)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  getPic(obj,callback){
    this.pic = this.http.post<any[]>(this.appconf.server+'/getpic',obj)
    this.pic.subscribe(
      data => {
        console.log("Result",data[0])
        callback(data[0])
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  savePic(obj,callback){
    this.pic = this.http.post<any>(this.appconf.server+'/savepic',obj)
    this.pic.subscribe(
      data => {
        console.log(data)
        callback(data)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
  updatePic(obj,callback){
    this.pic = this.http.post<any>(this.appconf.server+'/updatepic',obj)
    this.pic.subscribe(
      data => {
        console.log(data)
        callback(data)
      },
      err => {
        console.log(err)
        callback(err)
      }
    )
  }
}
