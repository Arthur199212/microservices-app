import { ProjectsService, TodosService } from '../../adapters'
import { Forbidden } from '../../errors'
import { Context } from '../../types'

const createTodo = async (parent: any, args: any, ctx: Context) => {
  const { projectId, userId } = args

  const project = await ProjectsService.getOneProject({ projectId, userId })

  if (!project) throw new Forbidden()

  return await TodosService.createTodo(args)
}

export default createTodo
