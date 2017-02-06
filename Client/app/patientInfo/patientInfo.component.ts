import { Component } from '@angular/core';
import { Patient } from './../shared/patient';

import {TabsComponent} from '../shared/tabs/tabs.component';
import {TabComponent} from '../shared/tabs/tab.component';

@Component({
    moduleId: module.id,
    templateUrl: './patientInfo.component.html'
})
export class PatientInfoComponent{
    pageTitle:string = 'Add/Edit Patient Info';
    model:Patient = new Patient();
}