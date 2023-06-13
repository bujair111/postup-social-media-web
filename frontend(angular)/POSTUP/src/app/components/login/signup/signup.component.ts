import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private elementRef: ElementRef,private router: Router,private loginService: LoginserviceService ){}
  ngOnInit(): void {
    const sign_in_btn = this.elementRef.nativeElement.querySelector("#sign-in-btn");
    const sign_up_btn = this.elementRef.nativeElement.querySelector("#sign-up-btn");
    const container = this.elementRef.nativeElement.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    if(!!localStorage.getItem('token') == true)
    setTimeout(() => {
      this.router.navigateByUrl('/userhome')
    }, 1000);

  }

  msg=''
  usernameStatus:boolean = false
  emailStatus:boolean = false
  signupfrom(formData: any){
    console.log(formData)
    this.loginService.userSignup(formData).subscribe((res:{ statuscode: number,msg: string})=>{
      this.msg=res.msg
      console.log(res.msg)
    })
    
  }

  usernamevarivifation(inputData: string)  {
    this.loginService.checkUsername(inputData).subscribe((res:{ status: boolean,})=>{
      console.log(res.status)
      this.usernameStatus = res.status
    })
    console.log(inputData);
  }
  emailverification(inputData: string)  {
    this.loginService.checkEmail(inputData).subscribe((res:{ status: boolean})=>{
      console.log(res.status)
      this.emailStatus = res.status
    })
    console.log(inputData);
  }
  

  loginsubmit(loginData: any) {
    console.log(loginData);
    this.loginService.userLogin(loginData).subscribe((res: { msg: string, statuscode: number, token: string, userId: any }) => {
      // Handle the response here
      console.log(res);
      if (res.statuscode == 201){
        localStorage.setItem('userId',res.userId)
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/userhome')
      }
      else if (res.statuscode == 404){
        this.msg = res.msg
      }
      else{
        this.msg = res.msg
      }
    });
  }

}

