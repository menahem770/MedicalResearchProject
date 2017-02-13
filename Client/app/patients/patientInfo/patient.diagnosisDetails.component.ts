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
    pageTitle: string = 'new Diagnosis for '+this.patient.name;
    diagnosis: PatientDiagnosis;
    patient: Patient;

    constructor(private router:Router,private route:ActivatedRoute,private dataService:ComponentsDataTransferService){
        let id = +this.route.snapshot.params['id'];
        this.patient = this.dataService.queriedPatients[0];
        if(id >= 0 && this.patient.diagnosis && this.patient.diagnosis.length > id){
            this.diagnosis = this.patient.diagnosis[id];
            this.pageTitle = 'Edit Diagnosis for '+this.patient.name;
            this.disable = 'disabled';
        }
        else{
            this.diagnosis = new PatientDiagnosis();
            this.patient.diagnosis.push(this.diagnosis);
        }
    }
    onsubmit(): void{
        //TO DO
        //save changes
        this.goBack();
    }
    goBack(): void{
        this.router.navigate(['./patientInfo/1']);
    }

}