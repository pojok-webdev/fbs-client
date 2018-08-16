import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FbsComponent } from '../fbs/fbs.component';
import { FbEditComponent } from '../fb-edit/fb-edit.component';
import { PicsComponent } from '../pics/pics.component';
import { PicEditComponent } from '../pic-edit/pic-edit.component';
import { PadiservicesComponent } from '../padiservices/padiservices.component';
import { LoginComponent } from '../login/login.component';
import { FbAddComponent } from '../fb-add/fb-add.component';
import { UserProfileComponent } from '../user-profile/user-profile.component'
import { UserChangepasswordComponent } from '../user-changepassword/user-changepassword.component';
import { ClientsComponent } from '../clients/clients.component';
import { ClientAddComponent } from '../client-add/client-add.component';

const routes: Routes = [
  {path:'fbs/:client_id/:pageIndex/:pageSize',component: FbsComponent},
  {path:'fbedit/:tab/:nofb',component: FbEditComponent},
  {path:'pics/:nofb',component:PicsComponent},
  {path:'picedit/:nofb/:role',component:PicEditComponent},
  {path:'padiservices/:fb_id',component:PadiservicesComponent},
  {path:'login',component:LoginComponent},
  {path:'fbadd/:client_id',component:FbAddComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'userchangepassword',component:UserChangepasswordComponent},
  {path:'clients',component:ClientsComponent},
  {path:'clientadd',component:ClientAddComponent}
]
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRouteModule { }
