import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-changepassword',
  templateUrl: './user-changepassword.component.html',
  styleUrls: ['./user-changepassword.component.css']
})
export class UserChangepasswordComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user = {
    email:'',
    newpassword:''
  }
  ngOnInit() {
  }
  savePassword(){
    this.user.email = localStorage.getItem('email')
    this.auth.changePassword(this.user,result => {
      console.log("Change Password Result",result)
    })
  }
}
