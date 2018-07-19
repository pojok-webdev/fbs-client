import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    username:'',
    email:''
  }
  tokenCondition
  constructor(private auth:AuthService) {
    this.auth.isLogin((result,msg) => {
      this.tokenCondition = msg
      if(result){
        console.log("Verify Result",msg,result)
        this.user.username = localStorage.getItem('username')
        this.user.email = localStorage.getItem('email')
      }else{
        console.log("Login false",msg)
      }
    })
  }
  ok(){
    
  }
  ngOnInit() {
  }

}
