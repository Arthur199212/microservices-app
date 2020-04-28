import Router from 'express'
import { catchAsync } from '../../../middlewares'
import { Project, Todo } from '../../../models'
import { ProjectsService } from '../../../services'
import { validate, getProjectSchema } from '../../../validation'

const router = Router()

router.get('/projects', catchAsync(async (req, res) => {
  // todo pagination
  validate(getProjectSchema, req.query)

  const projectsService = new ProjectsService(Project, Todo)
  const projects = await projectsService.getAll(req.body)

  res.json(projects)
}))

export default router
