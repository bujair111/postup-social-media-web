import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent {

  constructor(private userService: UserserviceService, private router: Router) { }
  postes: any
  ngOnInit() {
    this.userService.viewAllPost().subscribe((res: { statuscode: number, data: any }) => {
      // console.log(res.data)
      this.postes = res.data
    });
  }
  save(postId: any){
    const token = localStorage.getItem('userId')
    const saveData = {'userId':token,'postId':postId}
    // console.log(saveData)

    this.userService.postSave(saveData).subscribe()
  }
  posteProfile(userId: any){
    // console.log(userId)
    this.router.navigateByUrl('userhome/userProfile', { state: { userId:userId  } });
  }
}
