import Router from 'express'
import { catchAsync } from '../../../middlewares'
import { Todo } from '../../../models'
import { validate, reorderTodosSchema } from '../../../validation'
import { TodosService } from '../../../services'

const router = Router()

router.post('/reorder_todos', catchAsync(async (req, res) => {
  await validate(reorderTodosSchema, req.body)

  const todosService = new TodosService(Todo)
  const updatedTodos = await todosService.reorder(req.body)
  
  res.json(updatedTodos)
}))

export default router
