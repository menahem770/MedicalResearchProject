import { Component } from '@angular/core';
import { Patient } from './../shared/patient';

@Component({
    moduleId:module.id,
    templateUrl:'./patientInfo.component.html'
})
export class PatientInfoComponent{
    pageTitle:string = 'Add/Edit Patient Info';
    races:string[] = ['Caucasian','Black','Latino','Asian','Other'];
    gender:string[] = ['Male','Female'];
    model:Patient = new Patient();
}