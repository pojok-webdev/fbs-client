import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FbsComponent } from './fbs/fbs.component';

import { RouterModule } from '@angular/router'
import { AppRouteModule } from './app-route/app-route.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { 
  MatMenuModule, 
  MatSelectModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatDividerModule, 
  MatButtonModule, 
  MatTabsModule, 
  MatToolbarModule, 
  MatDialogModule, 
  MatIconModule, 
  MatPaginatorModule, 
  MatTooltipModule 
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FbEditComponent } from './fb-edit/fb-edit.component'
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PicsComponent } from './pics/pics.component';
import { PicEditComponent } from './pic-edit/pic-edit.component';
import { PadiservicesComponent } from './padiservices/padiservices.component';
import { PadiserviceAddComponent } from './padiservice-add/padiservice-add.component';
import { FbFeeAddComponent } from './fb-fee-add/fb-fee-add.component';
import { globalVars } from './globalVars';
import { LoginComponent } from './login/login.component';
import { FbAddComponent } from './fb-add/fb-add.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { FbServiceAddComponent } from './fb-service-add/fb-service-add.component';
import { PicAddComponent } from './pic-add/pic-add.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    FbsComponent,
    FbEditComponent,
    PicsComponent,
    PicEditComponent,
    PadiservicesComponent,
    PadiserviceAddComponent,
    FbFeeAddComponent,
    LoginComponent,
    FbAddComponent,
    UserProfileComponent,
    UserChangepasswordComponent,
    ClientsComponent,
    ClientAddComponent,
    FbServiceAddComponent,
    PicAddComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [
    DatePipe,
    globalVars
  ],
  entryComponents:[
    FbFeeAddComponent,
    FbServiceAddComponent,
    PicAddComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
