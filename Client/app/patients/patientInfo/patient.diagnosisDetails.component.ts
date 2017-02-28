import { Component,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { UsersService } from './../../shared/services/users.service';
import { SymptomsTabComponent } from './symptomsTab.component';
import { PatientsService } from '../../shared/services/patients.service';
import { Patient } from '../../shared/patient';
import { PatientDiagnosis } from '../../shared/patientDiagnosis';

@Component({
    selector: 'mrp-patient-diagnosis-details',
    moduleId:module.id,
    templateUrl:'./patient.diagnosisDetails.component.html'
})
export class PatientDiagnosisDetailsComponent{
    disable:string = "";
    pageTitle: string = 'new Diagnosis for '+this.patient.Name;
    diagnosis: PatientDiagnosis;
    patient: Patient;

    constructor(private router:Router,private route:ActivatedRoute,private dataService:UsersService, private patientsService:PatientsService){
        let id = +this.route.snapshot.params['id'];
        this.patient = this.patientsService.queriedPatients[0];
        if(id >= 0 && this.patient.Diagnosis && this.patient.Diagnosis.length > id){
            this.diagnosis = this.patient.Diagnosis[id];
            this.pageTitle = 'Edit Diagnosis for '+this.patient.Name;
            this.disable = 'disabled';
        }
        else{
            this.diagnosis = new PatientDiagnosis();
            this.diagnosis.PatientId = this.patient.PatientId;
            this.patient.Diagnosis.push(this.diagnosis);
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