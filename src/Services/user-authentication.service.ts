import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  baseUrl = 'http://localhost:8082';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/create`, user);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${userId}`);
  }
  
  updateUser(user:User):Observable<User>{
   return this.http.post<User>(`${this.baseUrl}/update`,user);
  }
}
