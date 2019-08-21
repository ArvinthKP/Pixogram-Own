import { Component, OnInit , Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Media } from "src/Model/Media";
import { UserAuthenticationService } from "src/Services/user-authentication.service";
import { MyMediaService } from "src/Services/my-media.service";
import { DataService } from "src/Services/data.service";



@Component({
  selector: 'app-mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.css']
})
export class MymediaComponent implements OnInit {

  medias: Media[];
  userId: number;

  @Input()
  mediaDetails: Media;

  constructor(private dataService: DataService,private router: Router, private mediaService: MyMediaService) {
  }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['login']);
      return;
    }
    this.userId = parseInt(userId);
    this.mediaService.getMedias(this.userId).subscribe(response => this.handleResponse(response));
  }
  handleResponse(response) {
    console.log(response)
    this.medias = response;
    for (let i = 0; i < this.medias.length; i++) {
      let oldUrl = this.medias[i].url;
      if (this.medias[i].likeCount == -1)
        this.medias[i].url = `http://localhost:8082/${oldUrl}`;
      else
        this.medias[i].url = `http://localhost:8082/files/${oldUrl}`;
    }
  }
  sendMediaDetails(m: Media){
    console.log(m);
    this.dataService.sendMediaDetails(m);
  }
}
