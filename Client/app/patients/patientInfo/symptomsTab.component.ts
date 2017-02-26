import { Patient } from './../../shared/patient';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'mrp-symptoms-tab',
    moduleId:module.id,
    template:''
})
export class SymptomsTabComponent{
    @Input() patient:Patient;
}