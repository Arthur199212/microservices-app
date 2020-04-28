import { ProjectsService } from '../../adapters'
import { Context } from '../../types'

const createProject = async (parent: any, args: any, ctx: Context) =>
  await ProjectsService.createProject(args)

export default createProject
