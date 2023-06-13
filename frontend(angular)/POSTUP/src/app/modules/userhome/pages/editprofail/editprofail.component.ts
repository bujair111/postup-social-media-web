import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-editprofail',
  templateUrl: './editprofail.component.html',
  styleUrls: ['./editprofail.component.css']
})
export class EditprofailComponent {

  constructor(private userService: UserserviceService){}

  editImage : any

  onEditImageChange(event: any){
    this.editImage = event.target.files[0]
    console.log(this.editImage)
  }

  editForm(editedData: any){

    const editData = new FormData()
    const token = localStorage.getItem('userId')

    if (token){
      editData.append('user', token)
    }
    editData.append('image', this.editImage)
    editData.append('bio',editedData['Description'])
    editData.append('username', editedData['username'])
    editData.append('phone', editedData['phone'])
    editData.append('name', editedData['name'])
    editData.append('gender', editedData['gender'])
    editData.append('dob', editedData['dob'])
    console.log(editData)

    this.userService.editProfile(editData).subscribe()
  }

}
