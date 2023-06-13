import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-post-user-profile',
  templateUrl: './post-user-profile.component.html',
  styleUrls: ['./post-user-profile.component.css']
})
export class PostUserProfileComponent {

  constructor(private userService: UserserviceService){}
  userDetails : any
  userPostDetails : any
  userImage : any
  ngOnInit() {
    const data = history.state.userId; // Replace 'key' with the actual key name used in the navigation
    console.log(data); // Access the passed data
    
    this.userService.viewProfile(data).subscribe(((res:{statuscode: number, post_data: any, user_data: any }) =>{

      this.userDetails = res.user_data
      this.userPostDetails = res.post_data
      this.userImage= res.user_data.image

    }));
  }

}
