export class PatientDiagnosis{

    patientId: number;
    doctorId: number;
    doctorName: string;
    medicalInstitution: string;
    inPatient: boolean;
    diagnosisDate: Date;
    dischargeDate: Date;
    symptoms: DiagnosisSymptoms;
}
export class DiagnosisSymptoms{
    hartRate: number;
    bloodPressure: string;
    painfulLimb:SymptomInfo;
    cough:SymptomInfo;
    swollenLimb:SymptomInfo;
    hempotysis:SymptomInfo;
    dyspnea:SymptomInfo;
    syncope:SymptomInfo;
    chestPain:SymptomInfo;
    fever:SymptomInfo;
    abnormalPain:SymptomInfo;
    neurologicalMenifest:SymptomInfo;
    temperture:SymptomInfo;
    mentalStatus:SymptomInfo;
}
export class SymptomInfo{
    is:boolean;
    extraInfo:string;
    number:number;
}
