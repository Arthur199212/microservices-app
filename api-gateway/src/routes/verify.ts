import Router from 'express'
import { catchAsync } from '../middlewares'
import { UsersService } from '../adapters'

const route = Router()

route.get('/email/verify', catchAsync(async (req, res) => {
  const { expires, id, signature, token } = req.query

  await UsersService.verifyEmail({
    expires,
    id,
    originalUrl: req.originalUrl,
    signature,
    token
  })

  res.json({ message: 'OK' })
}))

export default route
