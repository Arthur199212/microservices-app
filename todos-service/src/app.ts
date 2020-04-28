import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { notFound, serverError } from './middlewares'
import { v1 } from './routes'

const createApp = () => {
  const app = express()

  app.use(cookieParser())

  app.use(express.json())

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true
    })
  )

  app.get('/', (req, res) => {
    res.json({ message: 'todos-service' })
  })

  app.use(v1)

  app.use(notFound)

  app.use(serverError)

  return app
}

export default createApp
