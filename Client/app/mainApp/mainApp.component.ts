import { Component } from '@angular/core';
import { LoginRegistrationService } from '../loginRegistration/loginRegister.service';
import { ComponentsDataTransferService } from './../shared/componentsDataTransfer.service';
import { User } from './../shared/user';

@Component({
    selector: 'mrp-main-app',
    moduleId: module.id,
    templateUrl: './mainApp.component.html',
    styleUrls: ['./mainApp.component.css']
})
export class MainAppComponent{
    loggedInUser:User;
    pageTitle:string = 'Medical Research Project';
    loginTitle:string = 'login';
    burgerButton:boolean = true;

    constructor(private userDataServcie:ComponentsDataTransferService){
        this.userDataServcie.changeEmitted$.subscribe(user => this.loggedInUser = user);
    }
}