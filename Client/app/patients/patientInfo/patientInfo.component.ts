import { PatientsFormSchemaService } from './../../shared/services/patientsFormSchema.service';
import { SECOND_DYNAMIC_FORM_MODEL } from './second-dynamic-form.model';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from './../../shared/services/patients.service';
import { Patient } from '../../shared/patient';
import { DynamicFormControlModel, DynamicFormService } from "@ng2-dynamic-forms/core";

@Component({
    moduleId: module.id,
    templateUrl: './patientInfo.component.html'
})
export class PatientInfoComponent {
    pageTitle: string = 'Patient Detail';
    patient: Patient;
    errorMessage: string;
    filterQuery:string = "";
    rowsOnPage:number = 10;
    sortBy:string = "date";
    sortOrder:string = "desc";
    showDiagnosis:boolean;
    formModel: Array<DynamicFormControlModel>;

    constructor(private router: Router, private patientsService: PatientsService,private formService: PatientsFormSchemaService,private deserializerService: DynamicFormService) {}
    
    ngOnInit():void{
        this.patientsService.changeEmitted$.subscribe(patient => {
            this.patient = patient;
            this.showDiagnosis = patient.Diagnosis && patient.Diagnosis.length > 0;
        });
        //this.formService.SaveFirstSchema().subscribe(res => res);
        this.formService.GetFirstSchema().subscribe(res => {
            this.formModel = this.deserializerService.fromJSON(res);
        })
    }

    openDetails(diagnosisNum:number):void{
        this.router.navigate(['./patientDiagnosisDetails/'+diagnosisNum]);
    }
}