import { PatientsService } from './../patients/shared/patients.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from '../loginRegistration/loginRegister.service';
import { ComponentsDataTransferService } from './../shared/componentsDataTransfer.service';
import { User } from './../shared/user';

@Component({
    selector: 'mrp-main-app',
    moduleId: module.id,
    templateUrl: './mainApp.component.html',
    styleUrls: ['./mainApp.component.css'],
    providers:[ComponentsDataTransferService,PatientsService]
})
export class MainAppComponent{
    loggedInUser:User;
    pageTitle:string = 'Medical Research Project';
    loginTitle:string;
    loggedIn:boolean = false;

    constructor(private userDataServcie:ComponentsDataTransferService, private router:Router){
        this.userDataServcie.changeEmitted$.subscribe(user => this.login(user));
    }
    login(user:User):void{
        if(user){
            this.loggedIn = true;
            this.loggedInUser = user;
            this.loginTitle = 'hello '+user.UserName;
        }
    }
    logout():void{
        this.loggedIn = false;
        LoginRegistrationService.prototype.logout();
        this.router.navigate(['/login']);
    }
}