import express from 'express'
import patientServices from '../services/patientService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(patientServices.getEntries())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
