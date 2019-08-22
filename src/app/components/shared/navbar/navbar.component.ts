import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowersFollowingComponent } from "src/app/components/followers-following/followers-following.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router,) { }

  ngOnInit() {
  }
  // navigateFollow(){
  //   this.route.navigate(['/followers']);
  //   this.followComponent.fetchFollowings();
    
  // }
  onLogout()
  {
    
    if(confirm("Do You Want To Logout?"))
    {
      this.route.navigate(['home']);
    }  
      
 }
}

