import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) {}
  getAlluser(url: any){
    return this.httpClient.get(url);
  }

  addUser(url: any, newUser: any){
    return this.httpClient.post(url, newUser);
  }

  deleteUser(url: any, userId: any){
    this.httpClient.delete(url+'/'+userId);
  }
}
