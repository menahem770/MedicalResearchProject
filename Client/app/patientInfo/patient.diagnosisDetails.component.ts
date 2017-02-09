import { Component,Input } from '@angular/core'
import { Patient } from './../shared/patient';

@Component({
    selector: 'mrp-patient-diagnosis-details',
    moduleId:module.id,
    templateUrl:'./patient.diagnosisDetails.component.html'
})
export class PatientDiagnosisDetailsComponent{
    disable:string = "";
    @Input() patient:Patient;
}