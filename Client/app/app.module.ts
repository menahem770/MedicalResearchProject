import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, CanActivate } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {DataTableModule} from "angular2-datatable";


import { AppComponent }  from './app.component';
import { MainAppComponent } from './mainApp/mainApp.component';
import { LoginRegisterComponent } from './loginRegistration/loginRegister.component';
import { PatientInfoComponent } from './patientInfo/patientInfo.component';
import { PatientBasicInfoComponent } from './patientInfo/patientInfo.basic.component';
import { PatientInfoDiagnosisListComponent } from './patientInfo/patientInfo.diagnosisList.component';
import { TabComponent } from './shared/tabs/tab.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { DataFilterPipe } from './shared/dataFilter.pipe';
import { PatientDiagnosisDetailsComponent } from './patientInfo/patient.diagnosisDetails.component';

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
                    {path: 'patientInfo', component: PatientInfoComponent},
                    {path: 'patientDiagnosisDetails', component: PatientDiagnosisDetailsComponent},
                    {path: '', redirectTo: 'login', pathMatch:'full'},
                    {path: '**', redirectTo: 'login', pathMatch:'full'}
                  ])
                ],
  declarations: [ AppComponent,
                  MainAppComponent,
                  LoginRegisterComponent,
                  PatientInfoComponent,
                  PatientBasicInfoComponent,
                  PatientInfoDiagnosisListComponent,
                  PatientDiagnosisDetailsComponent,
                  TabComponent,
                  TabsComponent,
                  DataFilterPipe 
                ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
