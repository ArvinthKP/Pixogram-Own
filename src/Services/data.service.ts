import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Media } from 'src/Model/Media';
import { User } from "src/Model/User";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mediaDetailsSource = new BehaviorSubject<Media>(new Media());
  mediaDetails$ = this.mediaDetailsSource.asObservable();



  constructor() { }


  sendMediaDetails(m: Media) {
    console.log(m);
    this.mediaDetailsSource.next(m);
  }

  sendUserDetails(u: User) {
    //console.log("Inside Service"+u);
    return u;
  }
}
