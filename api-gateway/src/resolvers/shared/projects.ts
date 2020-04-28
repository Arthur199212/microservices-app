import { ProjectsService } from '../../adapters'
import { Context } from '../../types'

export const projects = async (parent: any, args: any, ctx: Context) =>
  await ProjectsService.getProjects(args)
