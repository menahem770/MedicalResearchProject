import { PatientDiagnosis } from './../../shared/patientDiagnosis';
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

    getPatients(findPatientModel:FindPatientModel):Observable<Patient[]>{
        let accessToken:string = JSON.parse(localStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this._http.post(this._url+"api/Patients/GetPatients",findPatientModel,options)
            .map((response: Response) => <Patient[]>response.json())
            .catch(this._handleError);
    }

    addPatient(patient:Patient):void{
        let accessToken:string = JSON.parse(localStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        this._http.post(this._url+"api/Patients/AddPatient",patient,options)
            .catch(this._handleError);
    }

    AddDiagnosis(patientId:number,diagnosis:PatientDiagnosis):void{
        let accessToken:string = JSON.parse(localStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        diagnosis.PatientId = patientId;
        this._http.put(this._url+"api/Patients/AddDiagnosis",diagnosis,options)
            .catch(this._handleError);
    }

    editPatient(patient:Patient):void{
        let accessToken:string = JSON.parse(localStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        this._http.put(this._url+"api/Patients/EditPatient",patient,options)
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
     
}