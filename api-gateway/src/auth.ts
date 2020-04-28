import { Request, Response } from 'express'
import { sign, verify } from 'jsonwebtoken'
import {
  ACCESS_TOKEN_SECRET,
  HALF_HOUR,
  REFRESH_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_SECRET,
  SEVEN_DAYS
} from './config'
import { Unauthorized } from './errors'

const REFRESH_TOKEN_PATH = '/refresh_token'

export const clearCookie = (res: Response) => {
  res.cookie(REFRESH_TOKEN_COOKIE_NAME, '', {
    httpOnly: true,
    path: REFRESH_TOKEN_PATH
  })
}

export const createAccessToken = (userId: string): string =>
  sign({ sub: userId }, ACCESS_TOKEN_SECRET, { expiresIn: HALF_HOUR })

export const createRefreshToken = (userId: string): string =>
  sign({ sub: userId }, REFRESH_TOKEN_SECRET, { expiresIn: SEVEN_DAYS })

export const getAccessToken = (req: Request): string => {
  const { authorization } = req.headers

  if (!authorization) throw new Unauthorized()

  return authorization.split(' ')[1]
}

export const isLoggedIn = (req: Request): boolean => {
  const { authorization } = req.headers

  if (!authorization) return false

  return true
}

export const sendRefreshToken = (res: Response, userId: string): void => {
  res.cookie(REFRESH_TOKEN_COOKIE_NAME, createRefreshToken(userId), {
    httpOnly: true,
    path: REFRESH_TOKEN_PATH
  })
}

export const verifyAccessToken = (accessToken: string) => verify(accessToken, ACCESS_TOKEN_SECRET)

export const verifyRefreshToken = (refreshToken: string) =>
  verify(refreshToken, REFRESH_TOKEN_SECRET)
