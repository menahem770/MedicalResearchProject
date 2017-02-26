import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CONFIG } from '../config';
import { User } from '../user';
import { LoginInfo } from '../../loginRegistration/shared/loginInfo';
import { RegistrationInfo } from '../../loginRegistration/shared/registrationInfo';
import { RecoveryInfo } from '../../loginRegistration/shared/recoveryInfo';

@Injectable()
export class UsersService{
    private _url: string = CONFIG.apiUrl+"api/Accounts";
    
    constructor(private _http: Http){ }

    loginSubmit(logInfo: LoginInfo): Observable<any> { 
        let headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options: RequestOptions = new RequestOptions({ headers: headers });
        let body: string = "userName="+logInfo.Username+"&password="+logInfo.Password+"&grant_type=password";
        return this._http.post(this._url+"/Token",body,options)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    registrationSubmit(regInfo: RegistrationInfo){
        return this._http.post(this._url+"/Register",regInfo)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    recoverySubmit(recInfo: RecoveryInfo){
        return this._http.post(this._url+"/PasswordRecovery",recInfo)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    getLoggedUser(username: string){
        let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({ headers: headers ,});
        return this._http.get(this._url+"/GetUser?username="+username,options)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    // getLoggedUserByToken(){
    //     let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
    //     let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
    //     let options: RequestOptions = new RequestOptions({ headers: headers ,});
    //     let body: Object = JSON.parse("token:"+accessToken);
    //     return this._http.post(this._url+"/GetUserByToken",body,options)
    //         .map((response: Response) => response.json())
    //         .catch(this._handleError);
    // }

    logout(): void {
        sessionStorage.removeItem('token');
    }
    
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
    
}