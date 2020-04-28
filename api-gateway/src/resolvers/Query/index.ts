import { ProjectsService, TodosService, UsersService } from '../../adapters'
import { Context } from '../../types'

export { projects } from '../shared'

export const me = async (parent: any, args: any, ctx: Context) =>
  await UsersService.getUserData(args)

export const project = async (parent: any, args: any, ctx: Context) =>
  await ProjectsService.getOneProject(args)

export const todo = async (parent: any, args: any, ctx: Context) =>
  await TodosService.getOneTodo(args)

export const todos = async (parent: any, args: any, ctx: Context) =>
  await TodosService.getTodos(args)
