import {Component,Input,Output,EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegistrationInfo } from './registrationInfo';
import { LoginInfo } from './loginInfo';
import { RecoveryInfo } from './recoveryInfo';
import { LoginRegistrationService } from './loginRegister.service';
import { ComponentsUserDataTransferService } from './../shared/componentsUserDataTransfer.service';
import { User } from './../shared/user';


@Component({
    selector: 'mrp-loginRegister',
    moduleId: module.id,
    templateUrl: './loginRegister.component.html',
    styleUrls: ['./loginRegister.component.css'],
    providers:[LoginRegistrationService]
})
export class LoginRegisterComponent{
    @Input() loggedInUser:User;
    pageTitle: string = 'Login Page';
    errorMsg: string;
    activeForm: number = 0;
    logInfo: LoginInfo = new LoginInfo();
    regInfo: RegistrationInfo = new RegistrationInfo();
    recInfo: RecoveryInfo = new RecoveryInfo();

    constructor(
            private _logRegService:LoginRegistrationService,
            private _route:ActivatedRoute,
            private _router:Router,
            private _userDataServcie:ComponentsUserDataTransferService){
        this._userDataServcie.emitChange(null);
        let id = +this._route.snapshot.params['form'];
        if(id >= 0 && id < 3)
            this.activeForm = id;
    }
     
    submit(): void {
        if(this.activeForm == 0){
            this._logRegService.loginSubmit(this.logInfo)
                .subscribe(user => {
                    this._userDataServcie.emitChange(user);
                    this._router.navigate(['./findPatient']);
                }, error => this.errorMsg = <any>error);
        }
        else if(this.activeForm == 1){
            this._logRegService.registrationSubmit(this.regInfo)
                .subscribe((res:any) => <boolean>res ? this.activeForm = 0 : this.errorMsg = 'Registration Failed',
                           (error:any) => this.errorMsg = <any>error);
        }
        // else{
        //     this._logRegService.recoverySubmit(this.recInfo)
        //         .subscribe(res => <boolean>res ? this.errorMsg = 'a temperary password has been sent to your email' : this.errorMsg = 'Recovery Failed', 
        //                    error => this.errorMsg = <any>error);
        // }
    }
        
}