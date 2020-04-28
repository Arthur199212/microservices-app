import Router from 'express'
import createTodos from './createTodos'
import getTodos from './getTodos'
import reorderTodos from './reorderTodos'
import id from './id'

const router = Router()

router.use(createTodos, getTodos, id, reorderTodos)

export default router
