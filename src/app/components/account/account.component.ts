import { Component, OnInit } from '@angular/core';
import { DataService } from "src/Services/data.service";
import { Media } from "src/Model/Media"; 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  media: Media;
  description: String;
  tags: String;
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("Inside Media Detail");
    this.dataService.mediaDetails$.subscribe(m => this.media = m);

    //this.dataService.sendMediaDetails().subscribe(m => this.media =m);
   // this.description = this.media.description;
   // this.tags = this.media.tags;
    console.log(this.media);
  }

}
