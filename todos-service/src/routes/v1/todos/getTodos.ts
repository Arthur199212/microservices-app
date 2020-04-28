import Router from 'express'
import { catchAsync } from '../../../middlewares'
import { Todo } from '../../../models'
import { validate, getTodosSchema } from '../../../validation'
import { TodosService } from '../../../services'

const router = Router()

router.get( '/todos', catchAsync(async (req, res) => {
    // todo pagination
    await validate(getTodosSchema, req.query)

    const todosService = new TodosService(Todo)
    const todos = await todosService.getAll(req.query)

    res.json(todos)
  })
)

export default router
