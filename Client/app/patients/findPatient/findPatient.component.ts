import { Patient } from './../../shared/patient';
import { ComponentsDataTransferService } from './../../shared/componentsDataTransfer.service';
import { Router } from '@angular/router';
import { User } from './../../shared/user';
import { PatientsService } from './../shared/patients.service';
import { FindPatientModel } from './findPatientModel';
import { Component, Input } from '@angular/core';

@Component({
    moduleId:module.id,
    templateUrl:'./findPatient.component.html'
})
export class FindPatientComponent{
    patient:FindPatientModel = new FindPatientModel();
    loggedInUser:User;
    
    constructor(private patientsService:PatientsService, private router:Router,private dataService:ComponentsDataTransferService){
        this.dataService.changeEmitted$.subscribe(user => this.loggedInUser = <User>user);
    }

    find():void{
        this.patientsService.getPatients(this.patient,JSON.parse(localStorage.getItem('token')).token)
            .subscribe(patients => {
                this.dataService.queriedPatients = patients;
                this.router.navigate(['./'+this.navigationAddress(patients)])
            });
    }
    private navigationAddress(patients:Patient[]):string{
        if(patients.length > 1)
            return 'patientList';
        else
            return 'patientInfo/1';
    }
}