import { UsersService } from '../../adapters'
import { sendRefreshToken, createAccessToken } from '../../auth'
import { Context } from '../../types'

const createUser = async (parent: any, args: any, { res }: Context) => {
  const user = await UsersService.createUser(args)

  sendRefreshToken(res, user.id)

  return {
    accessToken: createAccessToken(user.id)
  }
}

export default createUser
