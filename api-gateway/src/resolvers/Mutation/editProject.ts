import { ProjectsService } from '../../adapters'
import { Context } from '../../types'

const editProject = async (parent: any, args: any, ctx: Context) =>
  await ProjectsService.editProject(args)

export default editProject
