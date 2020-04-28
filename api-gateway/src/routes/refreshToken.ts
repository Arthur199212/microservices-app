import Route from 'express'
import { verifyRefreshToken, createAccessToken } from '../auth'
import { BadRequest } from '../errors'
import { catchAsync } from '../middlewares'

const route = Route()

route.post('/refresh_token', catchAsync(async (req, res) => {
  const { todoApp } = req.cookies

  if (!todoApp) throw new BadRequest()

  const { sub: userId }: any = verifyRefreshToken(todoApp)

  res.json({
    accessToken: createAccessToken(userId)
  })
}))

export default route
