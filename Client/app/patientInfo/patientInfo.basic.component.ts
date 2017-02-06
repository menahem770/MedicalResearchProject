import { Component } from '@angular/core';

@Component({
    selector: 'mrp-patient-basic',
    moduleId:module.id,
    templateUrl:'./patientInfo.basic.component.html'
})
export class PatientBasicInfoComponent{
    races:string[] = ['Caucasian','Black','Latino','Asian','Other'];
    gender:string[] = ['Male','Female'];
}