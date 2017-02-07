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

    // constructor(){
    //     this.id = 0;
    //     this.name = "";
    //     this.dateOfBirth = new Date();
    //     this.gender = Gender.Male;
    //     this.weight = 0;
    //     this.height = 0;
    //     this.race = Race.Caucasian;
    //     this.inclusionDate = new Date();
    //     this.general = "";
    // }
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