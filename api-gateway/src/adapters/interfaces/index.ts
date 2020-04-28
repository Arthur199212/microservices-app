export interface CreateTodoProps {
  body: string
  order: number
  projectId: string
  userId: string
}

export interface EditTodoProps {
  body: string
  done: boolean
  order: number
  todoId: string
  userId: string
}

export interface TodoProps {
  todoId: string
  userId: string
}

export interface GetTodosProps {
  projectId: string
  userId: string
}

export interface UserDocument {
  email: string
  password: string
}

export interface CreateProjectProps {
  title: string
  userId: string
}

export interface EditProjectProps {
  title: string
  projectId: string
  userId: string
}

export interface ProjectProps {
  projectId: string
  userId: string
}

export interface ReorderTodosProps {
  end: number
  projectId: string
  start: number
  userId: string
}

export interface BasicProps {
  userId: string
}
