export interface CreateTodosProps {
  body: string
  order: number
  project: string
  user: string
}

export interface EditTodosProps {
  id: string
  done: boolean
  body: string
  order: number
  project: string
  user: string
}

export interface TodosProps {
  id: string
  user: string
}

export interface GetTodosProps {
  project: string
  user: string
}

export interface ReorderTodosProps {
  end: number
  project: string
  user: string
  start: number
}
