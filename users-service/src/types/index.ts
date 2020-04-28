import { Document, Model } from 'mongoose'

export interface AuthProps {
  email: string
  password: string
}

export interface UserDocument extends Document {
  email: string
  password: string
  verifiedAt: Date
  matchesPassword: (password: string) => Promise<boolean>
  verificationUrl: () => string
}

export interface UserModel extends Model<UserDocument> {
  signVerificationUrl: (url: string) => string
  hasValidVerificationUrl: ({}: VerifyEmailProps) => boolean
}

export interface VerifyEmailProps {
  id: string
  token: string
  expires: number
  signature: string
  originalUrl: string
}
