import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../create-user/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  private urlApi: string = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  public getAllData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public getOneData(id:number):Observable<any> {
    return this.http.get<any>(this.urlApi+'/{{id}}')
  }

  public createUser(formData : User ) : Observable<any> {
    return this.http.post(this.urlApi, formData)
  }


}
