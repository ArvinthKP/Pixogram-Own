import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavHomeComponent } from './components/shared/nav-home/nav-home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UploadmediaComponent } from './components/uploadmedia/uploadmedia.component';
import { MultipleuploadmediaComponent } from './components/multipleuploadmedia/multipleuploadmedia.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './approuting';
import { HttpClientModule } from '@angular/common/http';
import { MymediaComponent } from './components/mymedia/mymedia.component';
import { FollowersFollowingComponent } from './components/followers-following/followers-following.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavHomeComponent,
    NavbarComponent,
    UploadmediaComponent,
    MultipleuploadmediaComponent,
    HomeComponent,
    MymediaComponent,
    FollowersFollowingComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
