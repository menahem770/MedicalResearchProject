import { Component,Input } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import { Patient } from './../shared/patient';
import { PatientDiagnosis } from './../shared/patientDiagnosis';

@Component({
    selector: 'mrp-patient-diagnosis-list',
    moduleId:module.id,
    templateUrl:'./patientInfo.advanced.component.html'
})
export class PatientInfoDiagnosisListComponent{
    @Input() patient:Patient;
    content:string = "advenced content here!";
    data:PatientDiagnosis[] = this.patient.diagnosis;
    filterQuery:string = "";
    rowsOnPage:number = 10;
    sortBy:string = "date";
    sortOrder:string = "desc";

    // toInt(num: string):number {
    //     return +num;
    // }

    openDetails(diagnosis:PatientDiagnosis):void{

    }

    // sortByWordLength = (a: any) => {
    //     return a.city.length;
    // }
}