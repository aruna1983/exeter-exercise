import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?per_page=20`);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}`); 
  }

}
