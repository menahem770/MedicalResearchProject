import { Component,Input } from '@angular/core';
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

    addDiagnosis():void {

    }
}