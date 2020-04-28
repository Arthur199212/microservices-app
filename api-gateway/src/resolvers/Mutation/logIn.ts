import { UsersService } from '../../adapters'
import { sendRefreshToken, createAccessToken } from '../../auth'
import { Context } from '../../types'

const logIn = async (parent: any, args: any, { req, res }: Context) => {
  const user = await UsersService.logIn(args)

  sendRefreshToken(res, user.id)

  return {
    accessToken: createAccessToken(user.id)
  }
}

export default logIn
