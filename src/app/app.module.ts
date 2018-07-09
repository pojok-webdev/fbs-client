import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FbsComponent } from './fbs/fbs.component';

import { RouterModule } from '@angular/router'
import { AppRouteModule } from './app-route/app-route.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatMenuModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FbEditComponent } from './fb-edit/fb-edit.component'
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PicsComponent } from './pics/pics.component';
import { PicEditComponent } from './pic-edit/pic-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    FbsComponent,
    FbEditComponent,
    PicsComponent,
    PicEditComponent
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
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
