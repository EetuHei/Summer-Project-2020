import express from 'express'
const app = express()
import { bmiCalculator } from './exercises/bmiCalculator'

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/hello', (_req, res) => {
  res.send('Hello full stack!')
})

app.get('/bmi?', (req, res) => {
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)
  const result = bmiCalculator(weight, height)
  res.json(result)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
