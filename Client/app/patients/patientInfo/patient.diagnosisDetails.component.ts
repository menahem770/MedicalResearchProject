import { PatientsService } from './../shared/patients.service';
import { ComponentsDataTransferService } from './../../shared/componentsDataTransfer.service';
import { Component,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
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

    constructor(private router:Router,private route:ActivatedRoute,private dataService:ComponentsDataTransferService, private patientsService:PatientsService){
        let id = +this.route.snapshot.params['id'];
        this.patient = this.dataService.queriedPatients[0];
        if(id >= 0 && this.patient.Diagnosis && this.patient.Diagnosis.length > id){
            this.diagnosis = this.patient.Diagnosis[id];
            this.pageTitle = 'Edit Diagnosis for '+this.patient.Name;
            this.disable = 'disabled';
        }
        else{
            this.diagnosis = new PatientDiagnosis();
            this.diagnosis.PatientId = this.patient.Id;
            this.patient.Diagnosis.push(this.diagnosis);
        }
    }
    submit(): void{
        this.patientsService.AddDiagnosis(this.patient,this.diagnosis);
        this.goBack();
    }
    goBack(): void{
        this.router.navigate(['./patientInfo/1']);
    }

}