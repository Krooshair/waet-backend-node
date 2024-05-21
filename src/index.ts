import express from 'express'
import cors from 'cors'

import { config } from 'dotenv'
import morgan from 'morgan'
config()

const app = express()
const host = process.env.HOST_NAME
const port = process.env.PORT_SERVER

app.use(cors())
app.use(morgan('dev'))
app.use('/api', (_req, res) => {
  res.status(200).json({ name: 'Fabian' })
})

app.listen(port, () => {
  console.log('=======================')
  console.log(`Servidor iniciado`)
  console.log('=======================')
  console.log(`http://${host}:${port}/api`)
})
