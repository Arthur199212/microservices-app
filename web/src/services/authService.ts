import { URL_REFRESH_TOKEN } from '../config'

export class AuthService {
  static accessToken = ''

  static setAccessToken (token: string) {
    this.accessToken = token
  }

  static getAccessToken () {
    return this.accessToken
  }

  static async refreshAccessToken () {
    try {
      const res = await fetch(URL_REFRESH_TOKEN, {
        method: 'POST',
        credentials: 'include'
      })
  
      const { accessToken } = await res.json()
  
      this.setAccessToken(accessToken)
    } catch (err) {
      console.log(err.message)
    }
  }
}
