import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  baseUrl ='http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  userSignup(signupData: any): Observable<any>{
    return this.http.post(this.baseUrl + 'commen/signup',signupData)
  }

  checkUsername(username: any): Observable<any>{
    const data = { username: username };
    return this.http.post(this.baseUrl + 'commen/username',data)
  }

  checkEmail(email: any): Observable<any>{
    const data = { email: email };
    return this.http.post(this.baseUrl + 'commen/email',data)
  }

  userLogin(loginData: any): Observable<any>{
    return this.http.post(this.baseUrl + 'commen/user/login',loginData)
  }
}
