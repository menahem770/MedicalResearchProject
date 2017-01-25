export interface IRecoveryInfo{
    emailAddress: string;
    dateOfBirth: Date; 
}
export class RecoveryInfo implements IRecoveryInfo {
    constructor(public emailAddress: string,
                public dateOfBirth: Date
    ){}
}