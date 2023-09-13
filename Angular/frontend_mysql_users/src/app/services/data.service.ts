import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../create-user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API = environment.api

  constructor(private readonly http: HttpClient) { }

  addNewUser(user: User): Observable<User> {
    return this.http.post(this.API, user);
  }

  getUsers(): Observable<any>{
    return this.http.get(this.API);
  }

  getUser(id: string): Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put(`${this.API}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
