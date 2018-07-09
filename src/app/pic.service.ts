import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PicService {
pics : Observable<any[]>
pic : Observable<any>
  constructor(private http: HttpClient) {}
  getPics(obj,callback){
    this.pics = this.http.get<any[]>('http://localhost:2000/getpics/'+obj.nofb)
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
    this.pic = this.http.post<any[]>('http://localhost:2000/getpic',obj)
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
    this.pic = this.http.post<any>('http://localhost:2000/savepic',obj)
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
    this.pic = this.http.post<any>('http://localhost:2000/updatepic',obj)
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
