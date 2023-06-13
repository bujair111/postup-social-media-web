import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent {

  constructor(private userService: UserserviceService, private router: Router){}
  saved: any
  ngOnInit() {
    const userId = localStorage.getItem('userId')
    this.userService.viewAllSavePost(userId).subscribe((res: { statuscode: number, msg: string, data: any } ) => {
      console.log(res.msg)
      this.saved = res.data
    })
  }

  viewSavedPost(data: any){
    console.log(data)
    this.router.navigateByUrl('userhome/viewPost', { state: {postId: data}})

  }

}
