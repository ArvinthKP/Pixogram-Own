import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Media } from "src/Model/Media";

@Injectable({
  providedIn: 'root'
})
export class MymediaService {

  baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getMedias(userId: number): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.baseUrl}/media/${userId}`);
  }
}
