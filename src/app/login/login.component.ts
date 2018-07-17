import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    name:'puji',
    email:'puji@padi.net.id',
    password:'najma',
    token:''
  }
  authenticated = true
  constructor(private http:HttpClient,private auth: AuthService) { }
  _login:Observable<any>
  ngOnInit() {
  }
  doLogin(){
    this.auth.doLogin(this.login,(result,msg) => {
      if(!result){
        console.log("Message",msg)
        this.authenticated = false
      }else{
        window.location.href = '/fbs'
      }
    })
  }
}
