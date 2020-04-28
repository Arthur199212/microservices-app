import fetch from 'node-fetch'
import { USERS_SERVICE_URI } from '../config'
import { UserDocument, BasicProps } from './interfaces'

export default class UsersService {
  static async createUser ({ email, password }: UserDocument) {
    const response: any = await fetch(`${USERS_SERVICE_URI}/api/v1/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.status !== 200) throw new Error(data.message)

    return data
  }

  static async logIn ({ email, password }: UserDocument) {
    const response: any = await fetch(`${USERS_SERVICE_URI}/api/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.status !== 200) throw new Error(data.message)

    return data
  }

  static async getUserData ({ userId }: BasicProps) {
    const response: any = await fetch(`${USERS_SERVICE_URI}/api/v1/user/${userId}`)

    const data = await response.json()

    if (response.status !== 200) throw new Error(data.message)

    return data
  }

  static async verifyEmail ({ expires, id, originalUrl, signature, token }: any) {
    const response: any = await fetch(`${USERS_SERVICE_URI}/api/v1/email/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expires, id, originalUrl, signature, token })
    })

    const data = await response.json()

    if (response.status !== 200) throw new Error(data.message)

    return data
  }
}
