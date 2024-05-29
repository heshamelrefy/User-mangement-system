import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl
  getUsers():Observable<IUser[]> 
  {
    return this.http.get<IUser[]>(`${this.baseUrl}users`);
  }
  editUsers():Observable<IUser[]> 
  {
    return this.http.get<IUser[]>(`${this.baseUrl}users`);
  }
  deleteUsers():Observable<IUser[]> 
  {
    return this.http.get<IUser[]>(`${this.baseUrl}users`);
  }
}
