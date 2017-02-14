import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CONFIG } from './../shared/config';
import { User } from './../shared/user';
import { LoginInfo } from './loginInfo';
import { RegistrationInfo } from './registrationInfo';
import { RecoveryInfo } from './recoveryInfo';

@Injectable()
export class LoginRegistrationService{
    private _url: string = CONFIG.apiUrl;
    
    constructor(private _http: Http){ }

    loginSubmit(logInfo: LoginInfo): Observable<any> { 
        let headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options: RequestOptions = new RequestOptions({ headers: headers });
        let body: string = "userName="+logInfo.username+"&password="+logInfo.password+"&grant_type=password";
        return this._http.post(this._url+"Token",body,options)
            // .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    registrationSubmit(regInfo: RegistrationInfo): any {
        return this._http.post(this._url+"api/Account/Register",regInfo)
            .map((response: Response) => response.json)
            .catch(this._handleError);
    }

    recoverySubmit(recInfo: RecoveryInfo): any {
        return this._http.post(this._url+"/passwordRecovery",recInfo)
            .map((response: Response) => response.blob)
            .catch(this._handleError);
    }

    logout(): void {
        localStorage.removeItem('token');
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
    
}