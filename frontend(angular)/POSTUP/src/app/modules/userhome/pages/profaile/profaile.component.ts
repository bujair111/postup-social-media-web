import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-profaile',
  templateUrl: './profaile.component.html',
  styleUrls: ['./profaile.component.css']
})
export class ProfaileComponent {

  constructor(private userService: UserserviceService){}
  userDetails : any
  userPostDetails : any
  userImage : any
  ngOnInit() {
    const data = history.state.userId; // Replace 'key' with the actual key name used in the navigation
    console.log(data); // Access the passed data


    const token: any = localStorage.getItem('userId');
    this.userService.viewProfile(token).subscribe(((res:{statuscode: number, post_data: any, user_data: any }) =>{

      this.userDetails = res.user_data
      this.userPostDetails = res.post_data
      this.userImage= res.user_data.image

    }));
  }
}
