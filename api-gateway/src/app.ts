import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { refreshToken, verify } from './routes'
import { serverError } from './middlewares'

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

  app.use(refreshToken)

  app.use(verify)

  app.use(serverError)

  return app
}

export default createApp
