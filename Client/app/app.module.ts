import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, CanActivate } from '@angular/router';
import { MaterialModule } from '@angular/material';
// import 'hammerjs';


import { AppComponent }  from './app.component';
import { LoginRegisterComponent } from './loginRegistration/loginRegister.component';
import { PatientInfoComponent } from './patientInfo/patientInfo.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  MaterialModule.forRoot(),
                  RouterModule.forRoot([
                    {path: 'login', component: LoginRegisterComponent},
                    {path: 'login/:form', component: LoginRegisterComponent},
                    {path: 'register', redirectTo: 'login/1', pathMatch:'full'},
                    {path: 'passwordrecovery', redirectTo: 'login/2', pathMatch:'full'},
                    {path: 'patientInfo', component: PatientInfoComponent},
                    {path: '', redirectTo: 'login', pathMatch:'full'},
                    {path: '**', redirectTo: 'login', pathMatch:'full'}
                  ])
                ],
  declarations: [ AppComponent,LoginRegisterComponent,PatientInfoComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
