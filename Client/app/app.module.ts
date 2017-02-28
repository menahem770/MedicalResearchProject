import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, CanActivate } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DataTableModule } from 'angular2-datatable';

import { AppComponent }  from './app.component';
import { MainAppComponent } from './mainApp/mainApp.component';
import { LoginRegisterComponent } from './loginRegistration/loginRegister.component';
import { EqualValidator } from './loginRegistration/shared/equalValidator.directive';
import { PatientInfoComponent } from './patients/patientInfo/patientInfo.component';
import { PatientBasicInfoComponent } from './patients/patientInfo/patientInfo.basic.component';
import { PatientInfoDiagnosisListComponent } from './patients/patientInfo/patientInfo.diagnosisList.component';
import { TabComponent } from './shared/tabs/tab.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { DataFilterPipe } from './shared/dataFilter.pipe';
import { PatientDiagnosisDetailsComponent } from './patients/patientInfo/patient.diagnosisDetails.component';
import { FindPatientComponent } from './patients/findPatient/findPatient.component';
import { CanActivateOAuthGuard } from './shared/services/canActivateOAuthGuard';
import { SymptomsTabComponent } from './patients/patientInfo/symptomsTab.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  DataTableModule,
                  MaterialModule.forRoot(),
                  RouterModule.forRoot([
                    {path: 'login', component: LoginRegisterComponent},
                    {path: 'login/:form', component: LoginRegisterComponent},
                    {path: 'register', redirectTo: 'login/1', pathMatch:'full'},
                    {path: 'passwordrecovery', redirectTo: 'login/2', pathMatch:'full'},
                    {path: 'patientInfo/:id', component: PatientInfoComponent, canActivate : [CanActivateOAuthGuard]},
                    {path: 'patientDiagnosisDetails/:id', component: PatientDiagnosisDetailsComponent, canActivate : [CanActivateOAuthGuard]},
                    {path: 'findPatient', component: FindPatientComponent, canActivate : [CanActivateOAuthGuard]},
                    {path: '', redirectTo: 'login', pathMatch:'full'},
                    {path: '**', redirectTo: 'login', pathMatch:'full'}
                  ])
                ],
  declarations: [ AppComponent,
                  MainAppComponent,
                  LoginRegisterComponent,
                  EqualValidator,
                  PatientInfoComponent,
                  PatientBasicInfoComponent,
                  PatientInfoDiagnosisListComponent,
                  PatientDiagnosisDetailsComponent,
                  FindPatientComponent,
                  TabComponent,
                  TabsComponent,
                  DataFilterPipe,
                  SymptomsTabComponent
                ],
  providers:    [CanActivateOAuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
