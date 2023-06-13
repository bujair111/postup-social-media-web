import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/'

  newPost(postData: any): Observable<any>{
    return this.http.post(this.baseUrl + 'user/newPost',postData)
  }

  viewAllPost():Observable<any>{
    return this.http.get(this.baseUrl + 'user/allPost')  
  }

  editProfile(Data: any):Observable<any>{
  return this.http.post(this.baseUrl + 'user/edit',Data)
  }

  viewProfile(token: string): Observable<any> {
    const params = { token: token };
    return this.http.get(this.baseUrl + 'user/profile', { params: params });
  }

  postSave(data: any): Observable<any>{
    return this.http.post(this.baseUrl + 'user/save',data)
  }

  viewAllSavePost(userId: any): Observable<any>{
    const params = {userId: userId}
    return this.http.get(this.baseUrl + 'user/bookmark', { params: params });
  }
  viewPost(postId: any): Observable<any>{
    const params = {postId: postId}
    return this.http.get(this.baseUrl + 'user/view/Post', { params: params });
  }
} 
