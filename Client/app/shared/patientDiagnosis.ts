import { MedicalInstitution } from './medicalInstitution';
export class PatientDiagnosis{

    PatientId: number;
    DoctorId: number;
    DoctorName: string;
    MedicalInstitution: MedicalInstitution;
    InOutPatient: boolean;
    DiagnosisDate: Date;
    DischargeDate: Date;
    Symptoms: DiagnosisSymptoms;
}
export class DiagnosisSymptoms{
    HeartRate: number;
    BloodPressure: string;
    PainfulLimb:SymptomInfo;
    Cough:SymptomInfo;
    SwollenLimb:SymptomInfo;
    Hempotysis:SymptomInfo;
    Dyspnea:SymptomInfo;
    Syncope:SymptomInfo;
    ChestPain:SymptomInfo;
    Fever:SymptomInfo;
    AbnormalPain:SymptomInfo;
    NeurologicalMenifest:SymptomInfo;
    Temperture:SymptomInfo;
    MentalStatus:SymptomInfo;
}
export class SymptomInfo{
    Is:boolean;
    ExtraInfo:string;
    Value:number;
}
