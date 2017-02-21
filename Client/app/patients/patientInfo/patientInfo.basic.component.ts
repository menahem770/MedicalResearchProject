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
    addOrSave:string = "";

    constructor(private router: Router){}
    
    ngOnInit() {
        if(this.patient.Id){
            this.addOrSave = 'Add New';
        }
        else{
            this.addOrSave = 'Save Changes';
        }
    }
    addDiagnosis(): void{
        this.router.navigate(['./patientDiagnosisDetails/-1']);
    }
    onsubmit(): void{
        //create or edit patient
        //add patient to dataservice
        //maybe after creation, stay to add diagnosis
    }
}