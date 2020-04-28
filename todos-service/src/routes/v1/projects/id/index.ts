import Router from 'express'
import deleteProject from './deleteProject'
import editProject from './editProject'
import getProject from './getProject'

const router = Router()

router.use(deleteProject, editProject, getProject)

export default router
