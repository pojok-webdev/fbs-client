import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppconfService } from './appconf.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _login
  constructor(private http : HttpClient,private appconf : AppconfService) { }

  doLogin(login,callback){
    this._login = this.http.post<any>(this.appconf.server+'/testlogin',login)
    this._login.subscribe(
      data => {
        console.log("Data",data)
        login.token = data.token
        localStorage.setItem('login',JSON.stringify(login))
        localStorage.setItem('token',data.token)
        if(data.message === "auth error"){
          console.log("Message",data.message)
          callback(false,"Auth Error")
        }else{
          callback(true,"ok")
        }
      },
      err => {
        callback(false,"Server Error")
        console.log("Err",err)
      }
    )
  }
  getLogin(){
    var _login = localStorage.getItem('login')
    console.log("User",_login)
    return _login
  }
  isLogin(callback){
    var token = localStorage.getItem('token')
    console.log("TOKEN",token)
    this._login = this.http.get<any>(this.appconf.server+'/islogin/'+token)
    this._login.subscribe(
      data => {
        switch(data.name){
          case 'JsonWebTokenError':
          callback(false,"Token Error")
          break;
          case 'TokenExpiredError':
          callback(false,"Token Expired")
          break
          default:
          console.log("Data",data)
          callback(true,"ok")
        }
      },
      err => {
        console.log("Err",err)
        callback(false,"Server Error")
      }
    )
  }
  logout(){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
}