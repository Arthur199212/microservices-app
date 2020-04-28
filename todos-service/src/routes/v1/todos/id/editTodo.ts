import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Todo } from '../../../../models'
import { validate, editTodosSchema } from '../../../../validation'
import { TodosService } from '../../../../services'

const router = Router()

router.put('/todos/:id', catchAsync(async (req, res) => {
  await validate(editTodosSchema, { ...req.params, ...req.body })

  const todosService = new TodosService(Todo)
  const updatedTodo = await todosService.edit({ ...req.params, ...req.body })

  res.json(updatedTodo)
}))

export default router
