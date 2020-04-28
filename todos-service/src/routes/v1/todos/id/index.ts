import Router from 'express'
import deleteTodo from './deleteTodo'
import editTodo from './editTodo'
import getTodo from './getTodo'

const router = Router()

router.use(deleteTodo, editTodo, getTodo)

export default router
