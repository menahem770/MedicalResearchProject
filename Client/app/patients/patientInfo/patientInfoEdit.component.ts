import { Component,Input,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { PatientsService } from '../../shared/services/patients.service';
import { Patient,Gender,Race } from '../../shared/patient';

@Component({
    selector: 'mrp-patient-edit',
    moduleId: module.id,
    templateUrl:'./patientInfoEdit.component.html'
})
export class PatientEditInfoComponent implements OnInit{
    patient:Patient;
    races:string[] = Object.keys(Race).map(k => Race[k]);
    genders:string[] = Object.keys(Gender).map(k => Gender[k]);
    pageTitle:string;
    formType:string;
    addOrSave:string = "";
    error:string;
    isFieldDisabled:boolean;

    constructor(private router:Router,private route:ActivatedRoute,private patientService:PatientsService){}
    ngOnInit() {
        this.patientService.changeEmitted$.subscribe(patient => this.patient = patient);
        this.determineFormType();
    }
    addDiagnosis(): void{
        this.router.navigate(['./patientDiagnosisDetails/0']);
    }
    submit(): void{
        if(this.formType == "A"){
            this.patient.InclusionDate = new Date();
            this.patientService.addPatient(this.patient)
                .subscribe((res:Response) => {
                        this.patientService.emitChange(this.patient[0]);
                        this.router.navigate(['./patientInfo']);
                    }, (error:any) => this.error = "Server Error, Patient wasn't saved!");
        }
        else
            this.patientService.editPatient(this.patient)
                .subscribe((error:any) => this.error = "Server Error, changes weren't saved!");
    }
    private determineFormType():void{
        if(+this.route.snapshot.params['id'] !== 0 && this.patient && this.patient.PatientId){
            this.formType = "E";
            this.addOrSave = 'Save Changes';
            this.pageTitle = 'Edit Details: '+this.patient.Name;
            this.isFieldDisabled = true;
        }
        else{
            this.patient = new Patient();
            this.formType = "A";
            this.addOrSave = 'Add New';
            this.pageTitle = 'Add New Patient';
            this.isFieldDisabled = false;
        }
    }

}