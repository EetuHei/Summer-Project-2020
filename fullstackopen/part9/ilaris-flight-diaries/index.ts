import express from 'express'
const app = express()
import diaryRouter from './src/routes/diaries'

app.use(express.json())

const PORT = 8080

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
