import { UserDocument } from '../types'
import { MailService } from '../services'
import eventEmitter from './eventEmitter'
import { RESEND_VERIFY_MAIL, USER_REGISTER } from './events'

eventEmitter.on(USER_REGISTER, async (user: UserDocument) => {
  try {
    const mailService = new MailService()
    await mailService.sendMail(user)
  } catch (err) {
    console.log(err)
  }
})

eventEmitter.on(RESEND_VERIFY_MAIL, async (user: UserDocument) => {
  try {
    const mailService = new MailService()
    await mailService.sendMail(user)
  } catch (err) {
    console.log(err)
  }
})
