import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MultipleuploadmediaComponent } from 'src/app/components/multipleuploadmedia/multipleuploadmedia.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { UploadmediaComponent } from 'src/app/components/uploadmedia/uploadmedia.component';
import { FollowersFollowingComponent } from "src/app/components/followers-following/followers-following.component";
import { MymediaComponent } from "src/app/components/mymedia/mymedia.component";
import { AccountComponent } from "src/app/components/account/account.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'upload', component: UploadmediaComponent },
    { path: 'mupload', component: MultipleuploadmediaComponent },
    { path: 'mymedia', component: MymediaComponent },
    { path: 'followers', component: FollowersFollowingComponent },
    { path: 'account', component: AccountComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
