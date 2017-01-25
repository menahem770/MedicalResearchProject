export interface IRegistrationInfo{
    username: string;
    password: string;
    fullName: string;
    emailAddress: string;
    contactInfo: string;
    dateOfBirth: Date;
}
export class RegistrationInfo implements IRegistrationInfo {
    constructor(public username: string,
                public password: string,
                public fullName: string,
                public emailAddress: string,
                public contactInfo: string,
                public dateOfBirth: Date
    ){}
}