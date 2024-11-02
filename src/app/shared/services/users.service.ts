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
  addUser(newUserData:IUser):Observable<IUser> 
  {
    return this.http.post<IUser>(`${this.baseUrl}users`,newUserData);
  }
  editUser(newUserData:IUser):Observable<IUser> 
  {
    return this.http.patch<IUser>(`${this.baseUrl}users/${newUserData.id}`,newUserData);
  }
  deleteUser(newUserData:IUser):Observable<IUser> 
  {
    return this.http.delete<IUser>(`${this.baseUrl}users/${+newUserData.id}`);
  }
  getPosts():Observable<any> 
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
