import { ConnectionOptions } from 'mongoose'

const {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_DATABASE = 'todos',
  MONGO_HOST = 'localhost',
  MONGO_PORT = 6000
} = process.env

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${
  encodeURIComponent(MONGO_PASSWORD)
}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
