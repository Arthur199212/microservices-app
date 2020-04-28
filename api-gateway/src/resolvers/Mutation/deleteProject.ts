import { ProjectsService } from '../../adapters'
import { Context } from '../../types'

const deleteProject = async (parent: any, args: any, ctx: Context) =>
  await ProjectsService.deleteProject(args)

export default deleteProject
