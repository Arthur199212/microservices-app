import { TodosService } from '../../adapters'
import { Context } from '../../types'

const editTodo = async (parent: any, args: any, ctx: Context) => await TodosService.editTodo(args)

export default editTodo
