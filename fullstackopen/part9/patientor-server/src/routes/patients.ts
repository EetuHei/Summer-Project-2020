import express from 'express'
import patientServices from '../services/patientService'
import toNewPatientEntry from '../config/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(patientServices.getNonSensitiveEntries())
})

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body)

    const addedEntry = patientServices.addPatient(newPatientEntry)
    res.json(addedEntry)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  try {
    const patient = patientServices.getPublicPatient(id)
    res.json(patient)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

export default router
