import { clearCookie } from '../../auth'
import { Context } from '../../types'

const logOut = async (parent: any, args: any, { res }: Context) => {
  clearCookie(res)

  return true
}

export default logOut
