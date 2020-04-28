import { TodosService } from '../../adapters'
import { Context } from '../../types'

const deleteTodo = async (parent: any, args: any, ctx: Context) =>
  await TodosService.deleteTodo(args)

export default deleteTodo
