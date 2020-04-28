import { TodosService } from '../../adapters'
import { Context } from '../../types'

const reorderTodos = async (parent: any, args: any, { req }: Context) =>
  await TodosService.reorderTodos(args)

export default reorderTodos
