import Router from 'express'
import login from './login'
import register from './register'
import user from './user'
import verify from './verify'

const router = Router()

router.use('/api/v1', login, register, user, verify)

export default router
