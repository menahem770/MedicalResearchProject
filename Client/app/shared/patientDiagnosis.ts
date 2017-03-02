import { MedicalInstitution } from './medicalInstitution';
export class PatientDiagnosis{
    Id:string;
    PatientId: string;
    DoctorId: string;
    DoctorName: string;
    MedicalInstitution: MedicalInstitution;
    InOutPatient: boolean;
    DiagnosisDate: Date;
    DischargeDate: Date;
    InclusionDate: Date;
    General: string;
    Symptoms: {Key:string,Symptom:SymptomInfo}[];

    constructor(patientId:string){
        this.PatientId = patientId;
    }
    fromJSON(json:Object) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}

export class SymptomInfo{
    SymptomName:string;
    Is:boolean;
    ExtraInfo:string;
    Value:number;

    fromJSON(json:Object) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}
