import { Observable } from 'rxjs/Observable';
import { FindPatientModel } from './../findPatient/findPatientModel';
import { Patient } from './../../shared/patient';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { CONFIG } from './../../shared/config';

@Injectable()
export class PatientsService{
    private _url: string = CONFIG.apiUrl;
    
    constructor(private _http: Http){}

    getPatients(findPatientModel:FindPatientModel,accessToken:string):Observable<Patient[]>{
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({ headers: headers ,});
        return this._http.post(this._url+"api/Patients/GetPatients",findPatientModel,options)
            .map((response: Response) => <Patient[]>response.json())
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
     
}