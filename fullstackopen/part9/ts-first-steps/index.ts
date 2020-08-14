import express from 'express'
const app = express()
import { bmiCalculator } from './exercises/bmiCalculator'
import { exerciseCalc } from './exercises/exerciseCalculator'

app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  express.static('build'),
])

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

app.post('/exercises', (req, res, _next) => {
  const body = req.body

  try {
    if (body.target === '' || body.dailyExercises.length === 0)
      throw new Error('parameters missing')
    const result = exerciseCalc(body.dailyExercises, body.target)
    res.json(result)
  } catch (e) {
    res.send('An error happened with message: ' + e.message)
  }
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
