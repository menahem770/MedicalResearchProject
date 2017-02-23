import { ComponentsDataTransferService } from '../../shared/services/componentsDataTransfer.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Patient } from '../../shared/patient';
import { PatientDiagnosis } from '../../shared/patientDiagnosis';

import { TabsComponent } from '../../shared/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab.component';

@Component({
    moduleId: module.id,
    templateUrl: './patientInfo.component.html'
})
export class PatientInfoComponent{
    pageTitle:string;
    public pageType:string;
    public model:Patient;

    constructor(private route:ActivatedRoute,private dataService:ComponentsDataTransferService){
        let id:number = +this.route.snapshot.params['id'];
        if(id == 0){
            this.model = new Patient();
            this.model.Diagnosis = new Array<PatientDiagnosis>();
            this.pageTitle = 'Add New Patient';
        }
        else{
            this.model = this.dataService.queriedPatients[0];
            this.pageTitle = 'Edit Patient Info';
        }
    }
}