import { NewPatientEntry, Gender, } from '../types'

const toNewPatientEntry = (object: any): NewPatientEntry => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    ssn: object.ssn,
    entries: object.entries,
  }
}

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseName = (name: any): string => {
  if (!name || !isString(name))
    throw new Error('Incorrect or missing name: ' + name)

  return name
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDateOfBirth = (dateOfBirth: any): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth))
    throw new Error('Incorrect or missing date: ' + dateOfBirth)

  return dateOfBirth
}

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param)
}

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender))
    throw new Error('Incorrect or missing gender: ' + gender)

  return gender
}

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation))
    throw new Error('Incorrect or missing occupation: ' + occupation)

  return occupation
}

export default toNewPatientEntry
