import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient,Gender,Race } from './../shared/patient';

@Component({
    selector: 'mrp-patient-basic',
    moduleId: module.id,
    templateUrl:'./patientInfo.basic.component.html'
})
export class PatientBasicInfoComponent{
    @Input() patient:Patient;
    races:string[] = Object.keys(Race).map(k => Race[k]).filter(v => typeof v === "string") as string[];
    gender:string[] = Object.keys(Gender).map(k => Gender[k]);

    constructor(private router: Router){}

    addDiagnosis(redirectTo:string):void {
        this.router.navigate(['./'+redirectTo]);
    }
    createOrEditPatient():void {
        //create or edit patient
        //maybe redirect to main
        //maybe after creation, stay to add diagnosis
    }
}