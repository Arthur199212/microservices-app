import { TodosService } from '../../adapters'
import { Context } from '../../types'

interface ProjectDocument {
  id: string
  title: string
  user: string
  createdAt: string
  updatedAt: string
}

export const todos = async (project: ProjectDocument, args: any, ctx: Context) =>
  await TodosService.getTodos({ ...args, projectId: project.id })
