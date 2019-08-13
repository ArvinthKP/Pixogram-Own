import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MultipleuploadmediaComponent } from 'src/app/components/multipleuploadmedia/multipleuploadmedia.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { UploadmediaComponent } from 'src/app/components/uploadmedia/uploadmedia.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'upload', component: UploadmediaComponent },
    { path: 'mupload', component: MultipleuploadmediaComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
