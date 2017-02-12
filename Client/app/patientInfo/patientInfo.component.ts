import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Patient } from './../shared/patient';
import { PatientDiagnosis } from './../shared/patientDiagnosis';

import { ComponentsPatientDataTransferService } from './componentsPatientDataTransfer.service';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { TabComponent } from '../shared/tabs/tab.component';

@Component({
    moduleId: module.id,
    templateUrl: './patientInfo.component.html',
    providers:[ComponentsPatientDataTransferService]
})
export class PatientInfoComponent{
    pageTitle:string;
    public pageType:string;
    public model:Patient;

    constructor(private route:ActivatedRoute,private dataService:ComponentsPatientDataTransferService){
        let id:number = +this.route.snapshot.params['id'];
        if(id == 0){
            this.model = new Patient();
            this.model.diagnosis = new Array<PatientDiagnosis>();
            this.pageTitle = 'Add New Patient';
        }
        else{
            this.model = this.dataService.patient;
            this.pageTitle = 'Edit Patient Info';
        }
    }
}