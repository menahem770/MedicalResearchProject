import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './../shared/user';
import { LoginInfo } from './loginInfo';
import { RegistrationInfo } from './registrationInfo';
import { RecoveryInfo } from './recoveryInfo';

@Injectable()
export class LoginRegistrationService{
    private _url: string = 'http://localhost:52091';

    constructor(private _http: Http){}

    loginSubmit(logInfo: LoginInfo): Observable<User> { 
        return this._http.post(this._url+"/api/Users",logInfo)
            .map((response: Response) => <User>response.json())
            .catch(this._handleError);
    }

    registrationSubmit(regInfo: RegistrationInfo): any {
        return this._http.post(this._url+"/api/Users",regInfo)
            .map((response: Response) => response.blob)
            .catch(this._handleError);
    }

    recoverySubmit(recInfo: RecoveryInfo): any {
        return this._http.post(this._url+"/api/Users",recInfo)
            .map((response: Response) => response.blob)
            .catch(this._handleError);
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
    
}