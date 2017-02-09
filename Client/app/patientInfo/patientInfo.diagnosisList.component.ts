import { Component,Input,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule } from "angular2-datatable";
import { Patient } from './../shared/patient';
import { PatientDiagnosis } from './../shared/patientDiagnosis';
import { ComponentsDiagnosisTransferService } from './componentsDiagnosisTransfer.service';

@Component({
    selector: 'mrp-patient-diagnosis-list',
    moduleId:module.id,
    templateUrl:'./patientInfo.diagnosisList.component.html'
})
export class PatientInfoDiagnosisListComponent implements OnDestroy{
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
    constructor(private router:Router,public dataservice: ComponentsDiagnosisTransferService){}
    openDetails(diagnosis:PatientDiagnosis):void{
        this.dataservice.patient = this.patient;
        this.router.navigate(['./'+redirectTo]);
    }

    ngOnDestroy() {
         
    }

    // sortByWordLength = (a: any) => {
    //     return a.city.length;
    // }
}