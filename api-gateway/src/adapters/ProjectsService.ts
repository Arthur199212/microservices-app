import fetch from 'node-fetch'
import { TODOS_SERVICE_URI } from '../config'
import { CreateProjectProps, EditProjectProps, ProjectProps, BasicProps } from './interfaces'

export default class ProjectsService {
  static async createProject ({ title, userId }: CreateProjectProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async deleteProject ({ projectId, userId }: ProjectProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/projects/${projectId}`, {
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

  static async editProject ({ projectId, title, userId }: EditProjectProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, user: userId })
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async getOneProject ({ projectId, userId }: ProjectProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/projects/${projectId}?user=${userId}`, {
      method: 'GET'
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }

  static async getProjects ({ userId }: BasicProps) {
    const data = await fetch(`${TODOS_SERVICE_URI}/api/v1/projects?user=${userId}`, {
      method: 'GET'
    })

    const res = await data.json()

    if (data.status !== 200) throw new Error(res.message)

    return res
  }
}
