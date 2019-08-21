import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowServiceService  } from 'src/Services/follow-service.service';
import { Follow } from 'src/Model/Follow';
import {  UserAuthenticationService } from 'src/Services/user-authentication.service';

@Component({
  selector: 'app-followers-following',
  templateUrl: './followers-following.component.html',
  styleUrls: ['./followers-following.component.css']
})
export class FollowersFollowingComponent implements OnInit {

  followers: any;
  followings: any;
  userId: number;
  options;
  followersUserDetails;
  followingsUserDetails;
  toggle: Map<number, boolean>;

  constructor(private router: Router, private follow: FollowServiceService, private userService: UserAuthenticationService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.fetchFollowers();
    this.fetchFollowings();
  }

  fetchFollowers() {
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
      console.log(this.followersUserDetails);
    });
  }

  fetchFollowings() {
    this.follow.getFollowings(this.userId).subscribe(response => {
      console.log(response);
      this.followings = response;
      let length = this.followings.length;
      this.followingsUserDetails = [];
      this.toggle = new Map<number, boolean>();
      for (let i = 0; i < length; i++) {
        this.userService.getUserById(this.followings[i].followId).subscribe(response => {
          this.followingsUserDetails.push(response);
          this.toggle.set(response.id, true);
        });
      }
      console.log(this.followingsUserDetails);
    });
  }

  unfollowUser(followId) {
    this.follow.unfollow(this.userId, followId).subscribe(res => {
      console.log(res);
      this.fetchFollowers();
      this.fetchFollowings();
    });
    this.toggle.set(followId, false);
  }
  followUser(followId) {
    let followObj = new Follow(this.userId, followId);
    this.follow.follow(followObj).subscribe(res => {
      console.log(res);
      this.fetchFollowers();
      this.fetchFollowings();
    });
    this.toggle.set(followId, true);
  }

}
