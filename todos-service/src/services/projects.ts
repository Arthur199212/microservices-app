import { ProjectModel, TodoModel } from '../models'
import {
  CreateProjectsProps,
  EditProjectsProps,
  GetProjectsProps,
  ProjectsProps
} from './interfaces'
import { BadRequest, Forbidden } from '../errors'

export class ProjectsService {
  private projectModule: ProjectModel
  private todoModel: TodoModel

  constructor (ProjectModel: ProjectModel, TodoModel: TodoModel) {
    this.projectModule = ProjectModel
    this.todoModel = TodoModel
  }

  public async create (args: CreateProjectsProps) {
    return await this.projectModule.create(args)
  }

  public async delete ({ id, user }: ProjectsProps) {
    const project = await this.projectModule.findById(id)

    if (!project) throw new BadRequest()

    if (String(project.user) !== user) throw new Forbidden()

    await this.todoModel.deleteMany({ project: id })

    await this.projectModule.findByIdAndDelete(id)

    return project
  }

  public async edit ({ id, title, user }: EditProjectsProps) {
    if (!title || !user) throw new BadRequest()

    const project = await this.projectModule.findById(id)

    if (!project) throw new BadRequest()

    if (String(project.user) !== user) throw new Forbidden()

    await this.projectModule.findByIdAndUpdate(id, { title, user })

    return await this.projectModule.findById(id)
  }

  public async getAll (args: GetProjectsProps) {
    return await this.projectModule.find(args)
  }

  public async getOne ({ id, user }: ProjectsProps) {
    const project = await this.projectModule.findById(id)

    if (!project) throw new BadRequest()
  
    if (String(project.user) !== user) throw new Forbidden()

    return project
  }
}
