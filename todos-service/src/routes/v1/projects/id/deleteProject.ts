import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Project, Todo } from '../../../../models'
import { ProjectsService } from '../../../../services'
import { validate, projectSchema } from '../../../../validation'

const router = Router()

router.delete('/projects/:id', catchAsync(async (req, res) => {
  validate(projectSchema, { ...req.params, ...req.body })

  const projectsService = new ProjectsService(Project, Todo)
  const project = await projectsService.delete({ ...req.params, ...req.body })

  res.json(project)
}))

export default router
