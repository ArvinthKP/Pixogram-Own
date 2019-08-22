import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowServiceService } from 'src/Services/follow-service.service';
import { Follow } from 'src/Model/Follow';
import { UserAuthenticationService } from 'src/Services/user-authentication.service';
import { User } from "src/Model/User";
import { DataService } from "src/Services/data.service";

@Component({
  selector: 'app-followers-following',
  templateUrl: './followers-following.component.html',
  styleUrls: ['./followers-following.component.css']
})
export class FollowersFollowingComponent implements OnInit {

  searched: boolean = false;
  followers: any;
  followings: any;
  userId: number;
  options;
  followersUserDetails = [];
  followingsUserDetails = [];
  toggle: Map<number, boolean>;
  searchUser: string;
  users: User[];
  foundUser: User;
  followingClicked: boolean = false;
  followersClicked: boolean = false;
  searchedUserResult: boolean = false;
  nofollowers: boolean = false;
  nofollowings: boolean = false;


  constructor(private router: Router, private follow: FollowServiceService, private userService: UserAuthenticationService, private dataService: DataService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
    console.log(this.users);
    let userId = localStorage.getItem("userId");
    console.log(userId);
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    // this.fetchFollowers();

    
    this.fetchFollowings();


  }

  searchUserName() {
    this.searched = false;
    this.followersClicked = false;
    this.followingClicked = false;
    this.nofollowers = false;
    this.nofollowings = false;
    console.log(this.users);
    for (let i = 0; i < this.users.length; i++) {
      if (this.searchUser === this.users[i].name) {

        this.foundUser = this.users[i];
        console.log(this.foundUser);
        this.searched = true;
        break;
      } else {
        this.searchedUserResult = true;
      }
    }



  }

  fetchFollowers() {

    this.searched = false;
    this.followersClicked = false;
    this.followingClicked = false;
    this.searchedUserResult = false;
    this.nofollowers = false;
    this.nofollowings = false;
    this.follow.getFollowers(this.userId).subscribe(response => {
      console.log(response);
      this.followers = response;
      let length = this.followers.length;
      this.followersUserDetails = [];
      for (let i = 0; i < length; i++) {
        this.userService.getUserById(this.followers[i].userId).subscribe(response => {
          this.followersUserDetails.push(response);
        });
      }


    });
    if (this.followersUserDetails.length > 0) {
      this.nofollowers = false;
    } else {
      this.nofollowers = true;
    }
    this.followersClicked = true;
  }

  fetchFollowings() {

    this.searched = false;
    this.followersClicked = false;
    this.followingClicked = false;
    this.searchedUserResult = false;
    this.nofollowings = false;
    this.nofollowers = false;
 console.log("Fetch Starts"+this.followingsUserDetails.length);
    this.follow.getFollowings(this.userId).subscribe(response => {
      console.log(response);
      this.followings = response;
      let length = this.followings.length;
      console.log("Fetch Starts"+this.followingsUserDetails.length);
      this.followingsUserDetails = [];
      console.log("Fetch Starts"+this.followingsUserDetails.length);
      this.toggle = new Map<number, boolean>();
      for (let i = 0; i < length; i++) {
        this.userService.getUserById(this.followings[i].followId).subscribe(response => {
          this.followingsUserDetails.push(response);
          this.toggle.set(response.id, true);
        });
        console.log("Fetch Starts"+this.followingsUserDetails.length);
      }
      // console.log(this.followingsUserDetails);


    });
    console.log("Before"+this.followingsUserDetails.length);
    if (this.followingsUserDetails.length > 0) {
      this.nofollowings = false;
    } else {
      this.nofollowings = true;
    }
    this.followingClicked = true;
  }

  unfollowUser(followId) {
    this.follow.unfollow(this.userId, followId).subscribe(res => {
      console.log(res);
      this.fetchFollowers();
      this.fetchFollowings();
    });
    this.toggle.set(followId, false);
    this.router.navigate(['followers']);
  }
  followUser(followId) {
    let followObj = new Follow(this.userId, followId);
    this.follow.follow(followObj).subscribe(res => {
      console.log(res);
      this.fetchFollowers();
      this.fetchFollowings();
    });
    this.toggle.set(followId, true);
    this.router.navigate(['followers']);
  }

}
