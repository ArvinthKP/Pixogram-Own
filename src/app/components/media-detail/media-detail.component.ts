import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Media } from "src/Model/Media";
import { DataService } from "src/Services/data.service";

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {

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

  onSubmit() {

  }
}
