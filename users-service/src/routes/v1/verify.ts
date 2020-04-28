import Route from 'express'
import { catchAsync } from '../../middlewares'
import { User } from '../../models'
import { UserService } from '../../services'
import { eventEmitter } from '../../subscribers'
import { resendEmailSchema, validate, verifyEmailSchema } from '../../validation'

const router = Route()

router.post( '/email/verify', catchAsync(async (req, res) => {
    await validate(verifyEmailSchema, req.body)

    const userService = new UserService(User, eventEmitter)
    await userService.verifyEmail(req.body)

    res.json({ message: 'OK' })
  })
)

router.post( '/email/resend', catchAsync(async (req, res) => {
    await validate(resendEmailSchema, req.body)

    const { email } = req.body

    const userService = new UserService(User, eventEmitter)
    await userService.resendVerifyMail(email)

    const message = 'If your email address needs to be verified, you will receive an email with the activation link'

    res.json({ message })
  })
)

export default router
