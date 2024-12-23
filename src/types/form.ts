export interface PatientInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface VitalSigns {
  bloodPressure: string;
  heartRate: string;
  temperature: string;
  respiratoryRate: string;
  oxygenSaturation: string;
  height: string;
  weight: string;
}

export interface MedicalHistory {
  allergies: string[];
  medications: string[];
  surgeries: string[];
  chronicConditions: string[];
  familyHistory: string[];
}

export interface Assessment {
  chiefComplaint: string;
  symptoms: string[];
  duration: string;
  severity: string;
  diagnosis: string;
  treatment: string;
  prescriptions: string[];
}

export interface FormData {
  patientInfo: PatientInfo;
  vitalSigns: VitalSigns;
  medicalHistory: MedicalHistory;
  assessment: Assessment;
  notes: string;
}