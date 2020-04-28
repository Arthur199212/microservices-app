import * as Yup from 'yup'
import { Buffer } from 'buffer'

const BCRYPT_MAX_BYTES = 72

const checkBytesLength = (string: string) =>
  Buffer.byteLength(string, 'utf-8') <= BCRYPT_MAX_BYTES

const email = Yup.string()
  .email('Invalid email')
  .min(8, 'Minimum length is 8 characters')
  .max(254, 'Maximum length is 254 characters')
  .lowercase()
  .trim()
  .required('The field is required')

const password = Yup.string()
  .min(8, 'Minimum length is 8 characters')
  .test('max', 'Maximum length is 74 characters', str => checkBytesLength(str))
  .matches(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u, {
    message: 'Password must contain one uppercase letter, one lowercase letter, and one digit'
  })
  .required('The field is required')

export const userSchema = Yup.object().shape({
  email,
  password
})
