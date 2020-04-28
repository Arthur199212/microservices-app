import Router from 'express'
import { catchAsync } from '../../../middlewares'
import { Todo } from '../../../models'
import { validate, createTodosSchema } from '../../../validation'
import { TodosService } from '../../../services'

const router = Router()

router.post('/todos', catchAsync(async (req, res) => {
  await validate(createTodosSchema, req.body)

  const todosService = new TodosService(Todo)
  const todo = await todosService.create(req.body)

  res.json(todo)
}))

export default router
