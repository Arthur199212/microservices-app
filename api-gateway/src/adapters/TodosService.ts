import fetch from 'node-fetch'
import { TODOS_SERVICE_URI } from '../config'
import {
  CreateTodoProps,
  EditTodoProps,
  GetTodosProps,
  ReorderTodosProps,
  TodoProps
} from './interfaces'

export default class TodosService {
  static async createTodo ({ body, projectId, order, userId }: CreateTodoProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body, order, project: projectId, user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async deleteTodo ({ todoId, userId }: TodoProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async editTodo ({ body, done, order, todoId, userId }: EditTodoProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body, done, order, user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async getOneTodo ({ todoId, userId }: TodoProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/todos/${todoId}?user=${userId}`, {
      method: 'GET'
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async getTodos ({ projectId, userId }: GetTodosProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/todos?project=${projectId}&user=${userId}`, {
      method: 'GET'
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async reorderTodos ({ end, projectId, start, userId }: ReorderTodosProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/reorder_todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ end, project: projectId, start, user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return !!res
  }
}
