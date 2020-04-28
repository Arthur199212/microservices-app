import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Project, Todo } from '../../../../models'
import { ProjectsService } from '../../../../services'
import { validate, editProjectsSchema } from '../../../../validation'

const router = Router()

router.put('/projects/:id', catchAsync(async (req, res) => {
  validate(editProjectsSchema, { ...req.params, ...req.body })

  const projectsService = new ProjectsService(Project, Todo)
  const updatedProject = await projectsService.edit({ ...req.params, ...req.body })

  res.json(updatedProject)
}))

export default router
