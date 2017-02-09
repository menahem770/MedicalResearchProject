export class PatientDiagnosis{

    patientId: number;
    doctorId: number;
    doctorName: string;
    medicalInstitution: string;
    inPatient: boolean;
    diagnosisDate: Date;
    dischargeDate: Date;
    symptoms: DiagnosisSymptoms;

    // constructor(){
    //     this.patientId = 0;
    //     this.doctorId = 0;
    //     this.doctorName = "";
    //     this.inPatient = true;
    //     this.diagnosisDate = new Date();
    //     this.dischargeDate = new Date();
    //     this.hartRate = 60;
    //     this.bloodPressure = "";
    // }
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
