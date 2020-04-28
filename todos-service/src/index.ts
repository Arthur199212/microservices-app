import mongoose from 'mongoose'
import {
  APP_PORT,
  MONGO_OPTIONS,
  MONGO_URI
} from './config'
import createApp from './app'

;(async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    const app = createApp()

    app.listen(APP_PORT, () =>
      console.log(`todos-service is running at http://localhost:${APP_PORT}`)
    )
  } catch (err) {
    console.log(err)
  }
})()
