import { Patient } from '../patient';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class ComponentsDataTransferService {
    public queriedPatients:Patient[];
    private emitChangeSource = new Subject<User>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: User) {
        this.emitChangeSource.next(change);
    }
}