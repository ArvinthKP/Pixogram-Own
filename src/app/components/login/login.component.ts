import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "src/Model/User";
import { UserAuthenticationService } from "src/Services/user-authentication.service";

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

  constructor(private router: Router, private userAuthentication: UserAuthenticationService) { }

  ngOnInit() {
    this.userAuthentication.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
  }

  checkLogin() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === this.userName && this.users[i].password === this.password) {
        this.router.navigate(['upload']);
        this.invalidLogin = false;
        localStorage.setItem("userId", this.users[i].id.toString());
      } else {
        this.invalidLogin = true;
      }
    }
  }

  onLogin() {
    this.checkLogin();
  }
}
