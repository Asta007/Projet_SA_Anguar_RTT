import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  
  private loginurl = "http://127.0.0.1:8000/system_user/login";

  constructor(private http:HttpClient) { }

  login(user){
    console.log(user)
    return this.http.post<any>(this.loginurl,user)
  }
}
