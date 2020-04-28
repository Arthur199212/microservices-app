import { TodoDocument } from '../models'

interface ReorderTodosProps {
  todos: TodoDocument[]
  start: number | string
  end: number | string
}

export const reorderTodos = ({ todos, start, end }: ReorderTodosProps) => {
  const newTodos: TodoDocument[] = []
  const startPos = Number(start)
  const endPos = Number(end)

  const isMoveDown = startPos - endPos < 0

  if (isMoveDown) {
    todos.forEach((todo: any) => {
      if (todo.order > startPos && todo.order <= endPos) {
        newTodos.push({
          ...todo,
          order: todo.order - 1
        })
      } else if (todo.order === startPos) {
        newTodos.push({
          ...todo,
          order: endPos
        })
      } else {
        newTodos.push({ ...todo })
      }
    })
  } else {
    todos.forEach((todo: any) => {
      if (todo.order < startPos && todo.order >= endPos) {
        newTodos.push({
          ...todo,
          order: todo.order + 1
        })
      } else if (todo.order === startPos) {
        newTodos.push({
          ...todo,
          order: endPos
        })
      } else {
        newTodos.push({ ...todo })
      }
    })
  }

  return newTodos.sort((a: TodoDocument, b: TodoDocument) => a.order - b.order)
}
