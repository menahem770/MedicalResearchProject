import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';

@Injectable()
export class CanActivateOAuthGuard implements CanActivate {

  constructor(public router : Router) {}
  canActivate() {

    if(localStorage.getItem("token") === null){
      this.router.navigateByUrl('/login');
    }
    return (localStorage.getItem("token") === null) ? false : true;
  }
}