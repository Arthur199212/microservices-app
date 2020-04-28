import Router from 'express'
import { catchAsync } from '../../middlewares'
import { User } from '../../models'
import { UserService } from '../../services'
import eventEmitter from '../../subscribers/eventEmitter'

const router = Router()

router.get('/user/:userId', catchAsync(async (req, res) => {
  const { userId } = req.params

  const userService = new UserService(User, eventEmitter)
  const user = await userService.getUser(userId)

  res.json(user)
}))

export default router
