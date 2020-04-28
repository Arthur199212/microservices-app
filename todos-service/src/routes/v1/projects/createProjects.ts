import Router from 'express'
import { catchAsync } from '../../../middlewares'
import { Project, Todo } from '../../../models'
import { ProjectsService } from '../../../services'
import { validate, todosSchema } from '../../../validation'

const router = Router()

router.post('/projects', catchAsync(async (req, res) => {
  validate(todosSchema, req.body)

  const projectsService = new ProjectsService(Project, Todo)
  const project = await projectsService.create(req.body)

  res.json(project)
}))

export default router
