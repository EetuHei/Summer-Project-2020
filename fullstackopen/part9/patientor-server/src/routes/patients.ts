import express from 'express'
import patientServices from '../services/patientService'
import toNewPatientEntry from '../config/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(patientServices.getEntries())
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

export default router
