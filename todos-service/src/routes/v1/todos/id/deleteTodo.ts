import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Todo } from '../../../../models'
import { validate, todosSchema } from '../../../../validation'
import { TodosService } from '../../../../services'

const router = Router()

router.delete('/todos/:id', catchAsync(async (req, res) => {
  await validate(todosSchema, { ...req.params, ...req.body })

  const todosService = new TodosService(Todo)
  const todo = await todosService.delete({ ...req.params, ...req.body })

  res.json(todo)
}))

export default router
