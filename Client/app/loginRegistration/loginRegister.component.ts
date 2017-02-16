import { Serializable } from './../shared/serializable';
import { Response } from '@angular/http';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegistrationInfo } from './registrationInfo';
import { LoginInfo } from './loginInfo';
import { RecoveryInfo } from './recoveryInfo';
import { LoginRegistrationService } from './loginRegister.service';
import { ComponentsDataTransferService } from './../shared/componentsDataTransfer.service';
import { User } from './../shared/user';

@Component({
    selector: 'mrp-loginRegister',
    moduleId: module.id,
    templateUrl: './loginRegister.component.html',
    styleUrls: ['./loginRegister.component.css'],
    providers:[LoginRegistrationService]
})
export class LoginRegisterComponent{
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
            private _userDataServcie:ComponentsDataTransferService){
        this._userDataServcie.emitChange(null);
        let id = +this._route.snapshot.params['form'];
        if(id >= 0 && id < 3)
            this.activeForm = id;
    }
     
    onsubmit() {
        if(this.activeForm == 0){
            this._logRegService.loginSubmit(this.logInfo)
                .subscribe(res => this.saveLoginInfo(res),
                        error => this.errorMsg = <any>error);
        }
        else if(this.activeForm == 1){
            this._logRegService.registrationSubmit(this.regInfo)
                .subscribe((res:any) => <boolean>res ? this.activeForm = 0 : this.errorMsg = 'Registration Failed',
                        (error:any) => this.errorMsg = <any>error);
        }
        else{
            this._logRegService.recoverySubmit(this.recInfo)
                .subscribe((res:any) => <boolean>res ? this.errorMsg = 'a temperary password has been sent to your email' : this.errorMsg = 'Recovery Failed', 
                        (error:any) => this.errorMsg = <any>error);
        }
    }

    saveLoginInfo(res:Response): void{
        let jRes = res.json();
        let user:User = new User().fromJSON(jRes.user);
        localStorage.setItem('token', JSON.stringify({ token: jRes.access_token, username: user.UserName }));
        this._userDataServcie.emitChange(user);
        this._router.navigate(['./findPatient']);
    }
        
}