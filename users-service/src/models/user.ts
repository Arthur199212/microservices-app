import { model, Schema } from 'mongoose'
import { hash, compare } from 'bcryptjs'
import { createHash, createHmac, timingSafeEqual } from 'crypto'
import {
  API_GATEWAY_ORIGIN,
  APP_SECRET,
  BCRYPT_WORK_FACTOR,
  EMAIL_VERIFICATION_TIMEOUT
} from '../config'
import { UserDocument, UserModel, VerifyEmailProps } from '../types'

const userSchema = new Schema({
    email: String,
    password: String,
    verifiedAt: Date
  }, {
    timestamps: true
  }
)

userSchema.pre<UserDocument>('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, BCRYPT_WORK_FACTOR)
  }
})

userSchema.methods.matchesPassword = function (password: string): Promise<boolean> {
  return compare(password, this.password)
}

userSchema.methods.verificationUrl = function (): string {
  const token = createHash('sha1')
    .update(this.email)
    .digest('hex')

  const expires = Date.now() + EMAIL_VERIFICATION_TIMEOUT

  const url = `${API_GATEWAY_ORIGIN}/email/verify?id=${this.id}&token=${token}&expires=${expires}`
  const signature = User.signVerificationUrl(url)

  return `${url}&signature=${signature}`
}

userSchema.statics.signVerificationUrl = (url: string): string =>
  createHmac('sha256', APP_SECRET)
    .update(url)
    .digest('hex')

userSchema.statics.hasValidVerificationUrl = (query: VerifyEmailProps): boolean => {
  const url = `${API_GATEWAY_ORIGIN}${query.originalUrl}`
  const original = url.slice(0, url.lastIndexOf('&'))
  const signature = User.signVerificationUrl(original)

  return timingSafeEqual(Buffer.from(signature), Buffer.from(query.signature))
    && +query.expires > Date.now()
}

userSchema.set('toJSON', {
  transform: (doc, { __v, password, _id, ...rest }, options) => ({
    id: _id,
    ...rest
  })
})

export const User = model<UserDocument, UserModel>('User', userSchema)
