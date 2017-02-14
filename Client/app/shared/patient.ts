import { PatientDiagnosis } from './patientDiagnosis'
export class Patient{

    id: number;
    name: string;
    dateOfBirth: Date;
    gender: Gender;
    weight: number;
    height: number;
    race: Race;
    inclusionDate: Date;
    general: string;
    diagnosis:PatientDiagnosis[];

    fromJSON(json:Object) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}

export enum Gender{
    Male,
    Female
}
export enum Race{
    Caucasian,
    Black,
    Latino,
    Asian,
    Other
}