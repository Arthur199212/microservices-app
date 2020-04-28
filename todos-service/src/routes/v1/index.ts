import Router from 'express'
import projects from './projects'
import todos from './todos'

const router = Router()

router.use('/api/v1', projects, todos)

export default router
