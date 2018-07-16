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
    password:'najma',
    token:''
  }
  constructor(private http:HttpClient,private auth: AuthService) { }
  _login:Observable<any>
  ngOnInit() {
  }
  doLogin(){
    this.auth.doLogin(this.login)
  }
}
