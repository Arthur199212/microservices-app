import Router from 'express'
import createProjects from './createProjects'
import getProjects from './getProjects'
import id from './id'

const router = Router()

router.use(createProjects, getProjects, id)

export default router
