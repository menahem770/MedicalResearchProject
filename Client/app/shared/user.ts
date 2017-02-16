import { MedicalInstitution } from './medicalInstitution';

export class User{
    UserID: number;
    UserName: string;
    FullName: string;
    EmailAddress: string;
    ContactInfo: string;
    AuthLevel: AuthLevel;
    DateOfBirth: Date;
    LicenceId: string;
    Rolse: string[];
    Institutions: MedicalInstitution[]

    fromJSON(json:Object) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}

export enum AuthLevel{
    MR,
    MRA,
    Admin,
    System
}