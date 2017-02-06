import { Component } from '@angular/core';
import { LoginRegistrationService } from '../loginRegistration/loginRegister.service';

@Component({
    selector: 'mrp-main-app',
    moduleId: module.id,
    templateUrl: './mainApp.component.html',
    styleUrls: ['./mainApp.component.css']
})
export class MainAppComponent{
    pageTitle:string = 'Medical Research Project';
    burgerButton:boolean = true;
}