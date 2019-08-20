import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Model/User'
import { UserAuthenticationService } from "src/Services/user-authentication.service";

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

  constructor(private router: Router, private userAuthentication: UserAuthenticationService) { }

  ngOnInit() {
  }

  onSignUp() {
    let user = new User(this.userName, this.eMail, this.password);
    this.userAuthentication.registerUser(user).subscribe(response => console.log(response));
    this.router.navigate(['/login']);

  }

}
