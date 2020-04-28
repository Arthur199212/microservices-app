import Router from 'express'
import { catchAsync } from '../../middlewares'
import { User } from '../../models'
import { UserService } from '../../services'
import { validate, authSchema } from '../../validation'
import eventEmitter from '../../subscribers/eventEmitter'

const router = Router()

router.post('/login', catchAsync(async (req, res) => {
  await validate(authSchema, req.body)

  const userService = new UserService(User, eventEmitter)
  const user = await userService.login(req.body)

  res.json(user)
}))

export default router
