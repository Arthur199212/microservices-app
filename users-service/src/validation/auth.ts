import { Joi } from './joi'
import { BCRYPT_MAX_BYTES, EMAIL_VERIFICATION_SIGNATURE_BYTES, EMAIL_VERIFICATION_TOKEN_BYTES } from '../config/auth'

const email = Joi.string()
  .email()
  .min(8)
  .max(254)
  .lowercase()
  .trim()
  .required()

const password = Joi.string()
  .min(8)
  .max(BCRYPT_MAX_BYTES, 'utf8')
  .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
  .message('"{#label}" must contain one uppercase letter, one lowercase letter, and one digit')
  .required()

export const authSchema = Joi.object({
  email,
  password
})

export const verifyEmailSchema = Joi.object({
  id: Joi.objectId().required(),

  token: Joi.string()
    .length(EMAIL_VERIFICATION_TOKEN_BYTES)
    .required(),

  expires: Joi.date()
    .timestamp()
    .required(),

  signature: Joi.string()
    .length(EMAIL_VERIFICATION_SIGNATURE_BYTES)
    .required(),

  originalUrl: Joi.string().required()
})

export const resendEmailSchema = Joi.object({
  email
})
