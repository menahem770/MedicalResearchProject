import { MedicalInstitution } from './medicalInstitution';
export class PatientDiagnosis{
    Id:string;
    PatientId: number;
    DoctorId: number;
    DoctorName: string;
    MedicalInstitution: MedicalInstitution;
    InOutPatient: boolean;
    DiagnosisDate: Date;
    DischargeDate: Date;
    InclusionDate: Date;
    General: string;
    Symptoms: {Key:string,Symptom:SymptomInfo}[];
}
// export class DiagnosisSymptoms{
//     HeartRate: number;
//     BloodPressure: string;
//     PainfulLimb:SymptomInfo;
//     Cough:SymptomInfo;
//     SwollenLimb:SymptomInfo;
//     Hempotysis:SymptomInfo;
//     Dyspnea:SymptomInfo;
//     Syncope:SymptomInfo;
//     ChestPain:SymptomInfo;
//     Fever:SymptomInfo;
//     AbnormalPain:SymptomInfo;
//     NeurologicalMenifest:SymptomInfo;
//     Temperture:SymptomInfo;
//     MentalStatus:SymptomInfo;
// }
export class SymptomInfo{
    SymptomName:string;
    Is:boolean;
    ExtraInfo:string;
    Value:number;
}
