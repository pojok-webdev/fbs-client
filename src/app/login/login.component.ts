import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    name:'',
    password:'',
    token:''
  }
  constructor(private http:HttpClient) { }
  _login:Observable<any>
  ngOnInit() {
  }
  doLogin(){
    this._login = this.http.post<any>('http://localhost:2000/login',this.login)
    this._login.subscribe(
      data => {
        console.log("Data",data)
        this.login.token = data.token
        localStorage.setItem('login',JSON.stringify(this.login))
        },
      err => {
        console.log("Err",err)
      }
    )
  }
  getLogin(){
    var _login = localStorage.getItem('login')
    console.log("User",_login)
  }
}
