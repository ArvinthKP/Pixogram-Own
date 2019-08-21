import { Injectable } from '@angular/core';
import { Follow } from 'src/Model/Follow';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowServiceService {

  baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getFollowings(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/followings/${userId}`);
  }

  getFollowers(followId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/followers/${followId}`);
  }

  follow(follow: Follow): Observable<Object> {
    return this.http.post(`${this.baseUrl}/follow`, follow);
  }

  unfollow(userId: number, followId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unfollow/${userId}/${followId}`, { responseType: 'text' });
  }

}
