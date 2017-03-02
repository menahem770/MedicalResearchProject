import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from './../../shared/services/patients.service';
import { Patient } from '../../shared/patient';

@Component({
    moduleId: module.id,
    templateUrl: './patientInfo.component.html'
})
export class PatientInfoComponent {
    pageTitle: string = 'Patient Detail';
    patient: Patient;
    errorMessage: string;
    filterQuery:string = "";
    rowsOnPage:number = 10;
    sortBy:string = "date";
    sortOrder:string = "desc";
    showDiagnosis:boolean;

    constructor(private router: Router, private patientsService: PatientsService) {}
    
    ngOnInit():void{
        this.patientsService.changeEmitted$.subscribe(patient => {
            this.patient = patient;
            this.showDiagnosis = patient.Diagnosis && patient.Diagnosis.length > 0;
        });      
    }

    openDetails(diagnosisNum:number):void{
        this.router.navigate(['./patientDiagnosisDetails/'+diagnosisNum]);
    }
}