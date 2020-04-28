import { sendMail } from '../mail'
import { UserDocument } from '../types'

export class MailService {
  public async sendMail (user: UserDocument): Promise<void> {
    const link = user.verificationUrl()

    await sendMail({
      to: user.email,
      subject: 'Verify your email address',
      text: link
    })
  }
}
