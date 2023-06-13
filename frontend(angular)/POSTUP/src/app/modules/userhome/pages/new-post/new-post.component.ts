import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  msg =''
  postImage : any ;

  constructor (private userService: UserserviceService) {}

  onImageChange(event: any){
    this.postImage = event.target.files[0]
    console.log(this.postImage)
  }

  newPost(formData: any) {
    const newPostData = new FormData();
    const token = localStorage.getItem('userId');
    if (token) {
      newPostData.append('user', token);
    }
    newPostData.append('image', this.postImage);
    newPostData.append('blogHead', formData['blogHead']);
    newPostData.append('blogBody', formData['blogContent']);
    newPostData.append('category', formData['category']);
  
    console.log(newPostData);
  
    this.userService.newPost(newPostData).subscribe((res: { statusCode: number, msg: string }) => {
      this.msg = res.msg;
    });
  }
  
}
