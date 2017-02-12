import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule } from "angular2-datatable";
import { Patient } from './../shared/patient';
import { PatientDiagnosis } from './../shared/patientDiagnosis';

@Component({
    selector: 'mrp-patient-diagnosis-list',
    moduleId:module.id,
    templateUrl:'./patientInfo.diagnosisList.component.html'
})
export class PatientInfoDiagnosisListComponent implements OnInit{
    @Input() patient:Patient;
    @Input() pageType:string;
    content:string = "advenced content here!";
    data:PatientDiagnosis[];
    filterQuery:string = "";
    rowsOnPage:number = 10;
    sortBy:string = "date";
    sortOrder:string = "desc";
    showDiagnosis:boolean = this.patient.diagnosis && this.patient.diagnosis.length > 0;

    constructor(private router:Router){}

    ngOnInit() {
        this.data = this.patient.diagnosis;
    }

    openDetails(diagnosisNum:number):void{
        this.router.navigate(['./patientDiagnosisDetails/'+diagnosisNum]);
    }

    // sortByWordLength = (a: any) => {
    //     return a.city.length;
    // }

    // toInt(num: string):number {
    //     return +num;
    // }
}