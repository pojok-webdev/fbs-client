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
          callback(false)
        }else{
          callback(true)
        }
      },
      err => {
        callback(false)
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
        if(data.name==='JsonWebTokenError'){
          callback(false)
        }else{
          console.log("Data",data)
          callback(true)
        }
      },
      err => {
        console.log("Err",err)
        callback(false)
      }
    )
  }
  logout(){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
}