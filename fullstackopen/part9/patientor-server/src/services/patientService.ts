import patients from '../data/patients'
import {
  NonSensitivePatientEntry,
  PatientEntry,
  NewPatientEntry,
  PublicPatient,
} from '../types'
import { v4 as uuid } from 'uuid'

const getEntries = (): PatientEntry[] => {
  return patients
}

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  )
}

const getPublicPatient = (paramId: string): PublicPatient[] => {
  const patient = patients.filter((p) => p.id === paramId)
  if (patient.length === 0) throw new Error('Could not find the patient')
  return patient
}

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  }
  patients.push(newPatientEntry)
  return newPatientEntry
}

export default {
  getEntries,
  addPatient,
  getNonSensitiveEntries,
  getPublicPatient,
}
