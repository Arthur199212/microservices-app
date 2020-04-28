import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Project, Todo } from '../../../../models'
import { ProjectsService } from '../../../../services'
import { validate, projectSchema } from '../../../../validation'

const router = Router()

router.get('/projects/:id', catchAsync(async (req, res) => {
  validate(projectSchema, { ...req.params, ...req.query })

  const projectsService = new ProjectsService(Project, Todo)
  const project = await projectsService.getOne({ ...req.params, ...req.query })

  res.json(project)
}))

export default router
