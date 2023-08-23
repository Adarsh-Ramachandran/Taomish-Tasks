import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginBoxComponent } from './login-box/login-box.component';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';
import { ListComponent } from './list/list.component';
import { HomPageComponent } from './hom-page/hom-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    LoginBoxComponent,
    StudentFormComponent,
    ListComponent,
    HomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
