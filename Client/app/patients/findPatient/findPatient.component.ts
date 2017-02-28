import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { UsersService } from './../../shared/services/users.service';
import { Patient } from './../../shared/patient';
import { User } from './../../shared/user';
import { PatientsService } from '../../shared/services/patients.service';
import { FindPatientModel } from './findPatientModel';

@Component({
    moduleId:module.id,
    templateUrl:'./findPatient.component.html'
})
export class FindPatientComponent{
    patient:FindPatientModel = new FindPatientModel();
    loggedInUser:User;
    pageTitle:string = "Find Patient";
    
    constructor(private patientsService:PatientsService, private router:Router,private dataService:UsersService){
        this.dataService.changeEmitted$.subscribe(user => this.loggedInUser = <User>user);
    }

    find():void{
        this.patientsService.getPatients(this.patient)
            .subscribe(patients => {
                this.patientsService.queriedPatients = patients;
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