import { Router } from 'express'
import { catchAsync } from '../../middlewares'
import { validate, authSchema } from '../../validation'
import { UserService } from '../../services'
import { User } from '../../models'
import eventEmitter from '../../subscribers/eventEmitter'

const router = Router()

router.post('/register', catchAsync(async (req, res) => {
  await validate(authSchema, req.body)

  const userService = new UserService(User, eventEmitter)
  const user = await userService.register(req.body)

  res.json(user)
}))

export default router
