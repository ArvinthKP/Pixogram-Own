import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "src/Model/User";
import { UserAuthenticationService } from "src/Services/user-authentication.service";
import { DataService } from "src/Services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String;
  password: String;
  invalidLogin: boolean = false;
  users: User[];
  correctUserName:boolean=false;
  correctPassword:boolean=false;
 // loginedUser:User;

  constructor(private router: Router, private userAuthentication: UserAuthenticationService, private dataService: DataService) { }

  ngOnInit() {
    this.userAuthentication.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
  }

  checkLogin() {
    //this.invalidLogin=false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === this.userName && this.users[i].password === this.password) {
        console.log(this.users[i].id);
        this.dataService.sendUserDetails(this.users[i])
        this.router.navigate(['mymedia']);
        this.invalidLogin = false;
        localStorage.setItem("userId", this.users[i].id.toString());
      } else if(this.users[i].name === this.userName && this.users[i].password !== this.password){
          this.correctUserName= true;
        
      }else{
        this.invalidLogin = true;
      }

    }
  }

  onLogin() {
    this.checkLogin();
  }
}
