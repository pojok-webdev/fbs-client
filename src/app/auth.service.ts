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
    this._login = this.http.post<any>(this.appconf.server+'/login',login)
    this._login.subscribe(
      data => {
        console.log("Data",data)
        login.token = data.token
        localStorage.setItem('login',JSON.stringify(login))
        localStorage.setItem('username',login.name)
        localStorage.setItem('email',login.email)
        localStorage.setItem('token',data.token)


        console.log('Login',localStorage.getItem('username'))
        console.log('Email',localStorage.getItem('email'))
        console.log('Token',localStorage.getItem('token'))

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
            console.log('Login',localStorage.getItem('username'))
            console.log('Email',localStorage.getItem('email'))
            console.log("Data",data)
            callback(true,"ok")
        }
      },
      err => {
        console.log("Verify Err",err)
        callback(false,"Server Error")
      }
    )
  }
  changePassword(obj,callback){

    //curl -d "email=puji@padi.net.id&name=puji&newpassword=puji&password=puji" -X POST http://localhost:2000/changepassword
    console.log("OBJ",obj)
    this._login = this.http.post<any>(this.appconf.server+'/changepassword',obj)
    this._login.subscribe(
      data => {
        console.log("change password",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  logout(){
    localStorage.removeItem('token')
    window.location.href = "/login"
  }
}