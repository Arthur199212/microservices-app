import cors from 'cors'
import express from 'express'
import { notFound, serverError } from '../middlewares'
import { v1 } from '../routes'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true
    })
  )

  app.use(v1)

  app.use(notFound)

  app.use(serverError)

  return app
}
