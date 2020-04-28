import { BadRequest, Forbidden } from '../errors'
import { TodoDocument, TodoModel } from '../models'
import { reorderTodos } from '../utils'
import {
  CreateTodosProps,
  EditTodosProps,
  GetTodosProps,
  ReorderTodosProps,
  TodosProps
} from './interfaces'

export class TodosService {
  private todoModel: TodoModel

  constructor (TodoModel: TodoModel) {
    this.todoModel = TodoModel
  }

  public async create (args: CreateTodosProps): Promise<TodoDocument> {
    const order = await this.getLarestOrder(args.project)

    return await this.todoModel.create({ ...args, done: false, order })
  }

  public async delete ({ id, user }: TodosProps) {
    const todo = await this.todoModel.findById(id)

    if (!todo) throw new BadRequest()

    if (String(todo.user) !== user) throw new Forbidden()

    await this.todoModel.findByIdAndDelete(id)

    await this.orderTodos(todo)

    return todo
  }

  public async edit (args: EditTodosProps) {
    const { id, user, ...rest } = args

    const todo = await this.todoModel.findById(id)

    if (!todo) throw new BadRequest()

    if (String(todo.user) !== user) throw new Forbidden()

    await this.todoModel.findByIdAndUpdate(id, { user, ...rest })

    return await this.todoModel.findById(id)
  }

  public async getAll (args: GetTodosProps): Promise<TodoDocument[]> {
    return await this.todoModel.find(args).sort({ order: 'asc' })
  }

  public async getOne ({ id, user }: TodosProps) {
    const todo = await this.todoModel.findById(id)

    if (!todo) throw new BadRequest()

    if (String(todo.user) !== user) throw new Forbidden()

    return todo
  }

  public async reorder (args: ReorderTodosProps) {
    const { end, project, start, user } = args

    const todos = await this.todoModel.find({ project, user })

    if (!todos) throw new BadRequest()

    const newTodos = reorderTodos({ end, start, todos: [...todos.map(({ _doc }: any) => _doc)] })

    await Promise.all(
      newTodos.map(({ _id, body, done, order, user }: any) =>
        this.todoModel.findByIdAndUpdate(_id, { body, done, order, user })
      )
    )

    return await this.todoModel.find({ project, user })
  }

  private async getLarestOrder (project: string): Promise<number> {
    const todos = await this.todoModel.find({ project })

    if (!todos || !todos.length) return 0

    return todos.sort((a: TodoDocument, b: TodoDocument) => a.order - b.order).pop()!.order + 1
  }

  private async orderTodos ({ project, user }: TodoDocument) {
    const todos = await this.todoModel.find({ project, user })

    if (!todos) return

    await Promise.all(
      todos
        .sort((a, b) => a.order - b.order)
        .map(({ _id, done, body, project, user }, idx) =>
          this.todoModel.findByIdAndUpdate(_id, { done, body, project, user, order: idx })
        )
    )
  }
}
