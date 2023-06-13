import { Component } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  status!: any 

  sideBarWidthe(value: any){
    this.status= value
    console.log("helooo")
  }
}
