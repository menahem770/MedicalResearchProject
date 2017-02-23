import { PatientsService } from '../shared/services/patients.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { ComponentsDataTransferService } from '../shared/services/componentsDataTransfer.service';
import { User } from './../shared/user';

@Component({
    selector: 'mrp-main-app',
    moduleId: module.id,
    templateUrl: './mainApp.component.html',
    styleUrls: ['./mainApp.component.css'],
    providers:[ComponentsDataTransferService,PatientsService,UsersService]
})
export class MainAppComponent{
    loggedInUser:User;
    pageTitle:string = 'Medical Research Project';
    loginTitle:string;
    loggedIn:boolean = false;

    constructor(private userDataServcie:ComponentsDataTransferService,
                private router:Router,
                private usersService:UsersService,
                private route:ActivatedRoute){
        if(!this.loggedInUser && localStorage.getItem("token")){
            let un = JSON.parse(localStorage.getItem('token')).username;
            this.usersService.getLoggedUser(un)
                .subscribe(res => this.userDataServcie.emitChange(new User().fromJSON(res)));
        }
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
        UsersService.prototype.logout();
        this.router.navigate(['/login']);
    }
}