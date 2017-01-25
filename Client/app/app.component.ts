import { Component } from '@angular/core';
import { LoginRegistrationService } from './loginRegistration/loginRegister.service';

@Component({
  selector: 'mrp-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   pageTitle:string = 'Medical Research Project';
   burgerButton:boolean = true;
}
