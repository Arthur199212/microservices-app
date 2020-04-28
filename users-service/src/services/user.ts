import { EventEmitter } from 'events'
import { BadRequest } from '../errors'
import { AuthProps, UserModel, UserDocument, VerifyEmailProps } from '../types'
import { USER_REGISTER, RESEND_VERIFY_MAIL } from '../subscribers'

export class UserService {
  private userModel: UserModel
  private eventEmitter: EventEmitter

  constructor (UserModel: UserModel, eventEmitter: EventEmitter) {
    this.userModel = UserModel
    this.eventEmitter = eventEmitter
  }

  public async getUser (userId: string): Promise<UserDocument | null> {
    return await this.userModel.findById(userId)
  }

  public async login ({ email, password }: AuthProps): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email })

    if (!user || !(await user.matchesPassword(password))) {
      throw new BadRequest('Invalid password')
    }

    return user
  }

  public async register ({ email, password }: AuthProps): Promise<UserDocument | null> {
    const found = await this.userModel.exists({ email })

    if (found) throw new BadRequest('Invalid email')

    const user = await this.userModel.create({
      email,
      password
    })

    this.eventEmitter.emit(USER_REGISTER, user)

    return user
  }

  public async resendVerifyMail (email: string): Promise<void> {
    const user = await this.userModel.findOne({ email }).select('email verifiedAt')

    if (user && !user.verifiedAt) this.eventEmitter.emit(RESEND_VERIFY_MAIL, user)
  }

  public async verifyEmail (args: VerifyEmailProps): Promise<void> {
    const { id } = args

    const user = await this.userModel.findById(id).select('verifiedAt')

    if (!user || !this.userModel.hasValidVerificationUrl(args)) {
      throw new BadRequest('Invalid activation link')
    }

    if (user.verifiedAt) throw new BadRequest('Email already verified')

    await this.markAsVerified(user)
  }

  private async markAsVerified (user: UserDocument): Promise<void> {
    user.verifiedAt = new Date()
    await user.save()
  }
}
