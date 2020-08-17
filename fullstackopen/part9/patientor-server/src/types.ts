export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>
export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>
export type NewPatientEntry = Omit<PatientEntry, 'id'>
export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries'>

export interface DiagnoseEntry {
  code: string
  name: string
  latin?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface PatientEntry {
  id: string
  name: string
  dateOfBirth: string
  ssn?: string
  gender: Gender
  occupation: string
  entries: Entry[]
}
