import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private router: Router, private userService: UserserviceService){}
  postData: any
  ngOnInit(){
    const data = history.state.postId;
    console.log(data)
    this.userService.viewPost(data).subscribe(((res :{ statuscode: number, data: any}) => {
      console.log(res.data)
      this.postData= res.data
    }))
  }

  posteProfile(userId: any){
    // console.log(userId)
    this.router.navigateByUrl('userhome/userProfile', { state: { userId:userId  } });
  }

}
