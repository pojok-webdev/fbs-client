import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FbsComponent } from '../fbs/fbs.component';
import { FbEditComponent } from '../fb-edit/fb-edit.component';
import { PicsComponent } from '../pics/pics.component';
import { PicEditComponent } from '../pic-edit/pic-edit.component';

const routes: Routes = [
  {path:'fbs',component: FbsComponent},
  {path:'fbedit/:nofb',component: FbEditComponent},
  {path:'pics/:nofb',component:PicsComponent},
  {path:'picedit/:nofb/:role',component:PicEditComponent}
]
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRouteModule { }
