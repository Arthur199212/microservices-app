import cors from 'cors'
import express from 'express'
import path from 'path'

const APP_PORT = 3000

const app = express()

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
)

app.use(express.static(path.join(__dirname, '../../web/dist')))

app.use('/static', express.static(path.join(__dirname, './assets')))

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../web/dist/index.html'))
})

app.listen(APP_PORT, () => console.log(`server is running at http://localhost:${APP_PORT}/`))
