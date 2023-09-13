import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { User } from '../create-user/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  private urlApi: string = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public getOneUser(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<number>(url);
  }

  public createUser(newUser: any): Observable<any> {
    return this.http.post<any>(this.urlApi, newUser, {
      headers: { 'Content-Type': 'application/json' },
      observe: 'body',
    });
  }

  public deleteUser(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
  
  
  

  // public deleteUser(id: string): Observable<any> {
  //   let deleteUrl = this.urlApi + '/id';
  //   console.log(deleteUrl);
  //   return this.http.delete(deleteUrl);
  // }
  public editUser(id: number, newUser: User): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.post<any>(url, newUser, {
      headers: { 'Content-Type': 'application/json' },
      observe: 'body',
    });
  }
  public getUserByEmail(email: string): Observable<any> {
    const url = `http://localhost:8080/api/v1/search`;
    return this.http.get<string>(url);
  }

}
