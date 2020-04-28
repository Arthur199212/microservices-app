import Router from 'express'
import { catchAsync } from '../../../../middlewares'
import { Todo } from '../../../../models'
import { TodosService } from '../../../../services'
import { validate, todosSchema } from '../../../../validation'

const router = Router()

router.get('/todos/:id', catchAsync(async (req, res) => {
  await validate(todosSchema, { ...req.params, ...req.query })

  const todosService = new TodosService(Todo)
  const todo = await todosService.getOne({ ...req.params, ...req.query })
  
  res.json(todo)
}))

export default router
