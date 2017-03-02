import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { UsersService } from './../../shared/services/users.service';
import { SymptomsTabComponent } from './symptomsTab.component';
import { PatientsService } from '../../shared/services/patients.service';
import { Patient } from '../../shared/patient';
import { PatientDiagnosis } from '../../shared/patientDiagnosis';

@Component({
    selector: 'mrp-patient-diagnosis-details',
    moduleId:module.id,
    templateUrl:'./patient.diagnosisDetails.component.html',
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css"],
})
export class PatientDiagnosisDetailsComponent implements OnInit{
    disable:string = "";
    pageTitle: string;
    diagnosis: PatientDiagnosis;
    patient: Patient;
    formGroup: FormGroup;
    
    constructor(private router:Router,private route:ActivatedRoute,private dataService:UsersService, private patientsService:PatientsService){}
    ngOnInit():void{
        let id = +this.route.snapshot.params['id'];
        this.patientsService.changeEmitted$.subscribe(patient => this.patient = patient);
        if(id >= 1 && this.patient.Diagnosis && this.patient.Diagnosis.length > id){
            this.diagnosis = this.patient.Diagnosis[id];
            this.pageTitle = 'Edit Diagnosis for '+this.patient.Name;
            this.disable = 'disabled';
        }
        else{
            this.diagnosis = new PatientDiagnosis(this.patient.PatientId);
            this.diagnosis.PatientId = this.patient.PatientId;
            this.patient.Diagnosis.push(this.diagnosis);
            this.pageTitle = 'new Diagnosis for '+this.patient.Name;
        }
    }
    submit(): void{
        this.diagnosis.PatientId = this.patient.PatientId;
        this.patientsService.AddDiagnosis(this.diagnosis);
        this.goBack();
    }
    goBack(): void{
        this.router.navigate(['./patientInfo/1']);
    }

}