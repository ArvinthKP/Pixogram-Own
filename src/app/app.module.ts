import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavHomeComponent } from './components/shared/nav-home/nav-home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UploadmediaComponent } from './components/uploadmedia/uploadmedia.component';
import { MultipleuploadmediaComponent } from './components/multipleuploadmedia/multipleuploadmedia.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './approuting';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavHomeComponent,
    NavbarComponent,
    UploadmediaComponent,
    MultipleuploadmediaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
