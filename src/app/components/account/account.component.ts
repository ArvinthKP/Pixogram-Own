import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "src/Model/User";
import { UserAuthenticationService } from "src/Services/user-authentication.service";
import { DataService } from "src/Services/data.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

 
  userName:String=this.dataService.userDetailsLogined.name;
  eMail:String =this.dataService.userDetailsLogined.email;
  password:String;
  users:User[];
  usernameNotAvailable:boolean=false;
  confirmPassword:String;
  validPassword:boolean=false;
  

  constructor(private router: Router, private dataService: DataService,private userAuthentication:UserAuthenticationService) { }

  ngOnInit() {
    console.log("Inside Media Detail");
    //this.dataService.mediaDetails$.subscribe(m => this.media = m);
    this.userAuthentication.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
    
    
    //this.dataService.sendMediaDetails().subscribe(m => this.media =m);
   // this.description = this.media.description;
   // this.tags = this.media.tags;   
    //console.log(this.media);
  }
  onUpdate() {
    this.usernameNotAvailable = false;
    let user = new User(this.userName, this.eMail, this.password);

    

    if (this.password !== this.confirmPassword) {
      this.validPassword = true;
    }else{
      this.validPassword = false;
    }
    if ( this.validPassword == false) {
      if (this.userName.length != 0 && this.password.length != 0 && this.eMail.length != 0) {

        // for (let i = 0; i < this.users.length; i++) {
        //   if (this.users[i].name === this.userName) {
            
        //     this.users[i].password=this.password;
        //     this.users[i].email=this.eMail;
            
        //   }
        // }
        this.userAuthentication.registerUser(user).subscribe(response => console.log(response));
        alert("Update Successfull");
        this.router.navigate(['/account']);
      }
    }else{
      this.router.navigate(['/account']);
    }
    
    // this.usernameNotAvailable = false;

  }
}
