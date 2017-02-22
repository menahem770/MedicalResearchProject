import { PatientsService } from './../shared/patients.service';
import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient,Gender,Race } from '../../shared/patient';

@Component({
    selector: 'mrp-patient-basic',
    moduleId: module.id,
    templateUrl:'./patientInfo.basic.component.html'
})
export class PatientBasicInfoComponent implements OnInit{
    @Input() patient:Patient;
    races:string[] = Object.keys(Race).map(k => Race[k]).filter(v => typeof v === "string") as string[];
    gender:string[] = Object.keys(Gender).map(k => Gender[k]);
    formType:string;
    addOrSave:string = "";

    constructor(private router:Router, private patientService:PatientsService){}
    
    ngOnInit() {
        if(this.patient.Id){
            this.formType = "A";
            this.addOrSave = 'Add New';
        }
        else{
            this.formType = "E";
            this.addOrSave = 'Save Changes';
        }
    }
    addDiagnosis(): void{
        this.router.navigate(['./patientDiagnosisDetails/-1']);
    }
    submit(): void{
        if(this.formType == "A")
            this.patientService.addPatient(this.patient);
        else
            this.patientService.editPatient(this.patient);
    }
}