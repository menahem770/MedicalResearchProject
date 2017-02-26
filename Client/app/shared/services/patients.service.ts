import { PatientDiagnosis } from '../../shared/patientDiagnosis';
import { Observable } from 'rxjs/Observable';
import { FindPatientModel } from '../../patients/findPatient/findPatientModel';
import { Patient } from '../../shared/patient';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../shared/config';

@Injectable()
export class PatientsService{
    private _url: string = CONFIG.apiUrl+"api/Patients";
    
    constructor(private _http: Http){}

    getPatients(findPatientModel:FindPatientModel):Observable<Patient[]>{
        let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this._http.post(this._url+"/GetPatients",findPatientModel,options)
            .map((response: Response) => <Patient[]>response.json())
            .catch(this._handleError);
    }

    addPatient(patient:Patient):any{
        let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this._http.post(this._url+"/AddPatient",patient,options)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    AddDiagnosis(diagnosis:PatientDiagnosis):any{
        let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        //diagnosis.PatientId = patientId;
        return this._http.put(this._url+"/AddDiagnosis",diagnosis,options)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    editPatient(patient:Patient):any{
        let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
        let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this._http.put(this._url+"/EditPatient",patient,options)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
     
}