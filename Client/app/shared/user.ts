export interface IUser{
    userID: number;
    username: string;
    fullName: string;
    emailAddress: string;
    contactInfo: string;
    dateOfBirth: Date;
    
}
export class User implements IUser {
    constructor(public userID: number,
                public username: string,
                public fullName: string,
                public emailAddress: string,
                public contactInfo: string,
                public authLevel: number,
                public dateOfBirth: Date
    ){}
}