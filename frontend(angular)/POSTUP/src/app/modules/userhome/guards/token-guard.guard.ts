import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardGuard {
  constructor (private router: Router) {}
  canActivate(){
    if(!!localStorage.getItem('token') == false){
      this.router.navigateByUrl('/login')
      alert('Please log in')
    }
      return true
    
  }
  
}
