import { MedicalInstitution } from './../../shared/medicalInstitution';
import { PatientDiagnosis, SymptomInfo } from './../../shared/patientDiagnosis';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from './../../shared/services/patients.service';
import { Patient } from '../../shared/patient';

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

    constructor(private router: Router, private patientsService: PatientsService) {}
    
    ngOnInit():void{
        this.patientsService.changeEmitted$.subscribe(patient => {
            this.patient = patient;
            this.showDiagnosis = patient.Diagnosis && patient.Diagnosis.length > 0;
            this.patient.Diagnosis.push(new PatientDiagnosis(this.patient.PatientId));
            let diag:PatientDiagnosis = this.patient.Diagnosis[this.patient.Diagnosis.length-1];
            diag.InOutPatient = true;
            diag.DoctorId = "026606657";
            diag.InclusionDate = new Date();
            diag.DiagnosisDate = new Date();
            diag.DischargeDate = new Date();
            diag.DoctorName = "me";
            diag.General = "still healthy";
            (diag.MedicalInstitution = new MedicalInstitution()).Name = "shiba";
            diag.Symptoms.push({Key:"InclusionDate",Symptom:new SymptomInfo("InclusionDate",null,null,null,new Date())});
            diag.Symptoms.push({Key:"PatientCode",Symptom:new SymptomInfo("PatientCode",null,this.patient.Name[0],null,null)});
            diag.Symptoms.push({Key:"Age",Symptom:new SymptomInfo("Age",null,null,new Date().getFullYear()-1986,null)});
            diag.Symptoms.push({Key:"WaistCircumference",Symptom:new SymptomInfo("WaistCircumference",null,null,110,null)});
            diag.Symptoms.push({Key:"ConcomitantTherapy",Symptom:new SymptomInfo("ConcomitantTherapy",null,"not specified",null,null)});
            diag.Symptoms.push({Key:"Corticosteroids",Symptom:new SymptomInfo("Corticosteroids",null,"yes",null,null)});
            diag.Symptoms.push({Key:"NSAID",Symptom:new SymptomInfo("NSAID",null,"no",null,null)});
            diag.Symptoms.push({Key:"Antiplatelets",Symptom:new SymptomInfo("Antiplatelets",null,"yes",null,null)});
            diag.Symptoms.push({Key:"AntiplateletsDiscontinuedOnAnticoagulantTherapy",Symptom:new SymptomInfo("AntiplateletsDiscontinuedOnAnticoagulantTherapy",false,null,null,null)});
            diag.Symptoms.push({Key:"Psychotropics",Symptom:new SymptomInfo("Psychotropics",null,"not specified",null,null)});
            diag.Symptoms.push({Key:"SpecifyDrugs",Symptom:new SymptomInfo("SpecifyDrugs",null,"bal bla",null,null)});
            diag.Symptoms.push({Key:"Erythropoietin",Symptom:new SymptomInfo("Erythropoietin",null,"no",null,null)});
            diag.Symptoms.push({Key:"Statins",Symptom:new SymptomInfo("Statins",null,"no",null,null)});
            diag.Symptoms.push({Key:"Drug",Symptom:new SymptomInfo("Drug",null,null,null,null)});
            diag.Symptoms.push({Key:"Dose/Day",Symptom:new SymptomInfo("Dose/Day",null,null,50,null)});
            diag.Symptoms.push({Key:"Other",Symptom:new SymptomInfo("Other",null,"lorem ipsum kjnsdmfnbal ;kashdfgm,n  as;dgkns g;askhas bgd dfasdf",null,null)});
            this.patientsService.AddDiagnosis(diag).subscribe((res:any) => res, (error:any) => console.log("Server Error, Patient wasn't saved!"));
        });
    }

    openDetails(diagnosisNum:number):void{
        this.router.navigate(['./patientDiagnosisDetails/'+diagnosisNum]);
    }
}