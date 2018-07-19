import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private auth:AuthService,private icon:MatIconRegistry,private sanitizer:DomSanitizer,private dialog: MatDialog){
    this.icon.addSvgIcon("userprofile",this.sanitizer.bypassSecurityTrustResourceUrl("assets/round-person-24px.svg"))
  }
  logout(){
    console.log("Logged Out")
    this.auth.logout()
  }
  changePassword(){
    this.dialog.open(UserChangepasswordComponent,{data:{title:'Change Password'}})
  }
}
