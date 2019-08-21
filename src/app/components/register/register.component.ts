import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "src/Model/User";
import { UserAuthenticationService } from "src/Services/user-authentication.service";
import { DataService } from "src/Services/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: String;
  eMail: String;
  password: String;
  confirmPassword: String;
  validPassword: boolean = false;
  users: User[];
  usernameNotAvailable: boolean = false;

  constructor(private router: Router, private userAuthentication: UserAuthenticationService, private dataService: DataService) { }

  ngOnInit() {
    this.userAuthentication.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
  }

  onSignUp() {
    let user = new User(this.userName, this.eMail, this.password);

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === this.userName) {
        this.usernameNotAvailable = true;
        break;
      }
    }

    if (this.password !== this.confirmPassword) {
      this.validPassword = true;
    }
    if (this.usernameNotAvailable == false && this.validPassword == false) {
      if (this.userName.length != 0 && this.password.length != 0 && this.eMail.length != 0) {
        this.userAuthentication.registerUser(user).subscribe(response => console.log(response));
        alert("SignUp Successfull ! Press Ok To Redirect To Login Page");
        this.router.navigate(['/login']);
      }
    }else{
      this.router.navigate(['/signup']);
    }
    
    // this.usernameNotAvailable = false;

  }

}
