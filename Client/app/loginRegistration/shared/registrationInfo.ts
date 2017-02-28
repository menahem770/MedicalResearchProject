import { MedicalInstitution } from '../../shared/medicalInstitution';
export class RegistrationInfo{
    Username: string;
    Password: string;
    FullName: string;
    EmailAddress: string;
    ContactInfo: string;
    DateOfBirth: Date;
    LicenceId: string;
    Institutions: MedicalInstitution[];
}