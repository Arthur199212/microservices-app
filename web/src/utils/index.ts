import { Observable } from 'apollo-boost'

export const promiseToObservable = (promise: any) =>
  new Observable((subscriber: any) => {
    promise.then((res: any) => {
      if (subscriber.closed) return
      subscriber.next(res)
      subscriber.complete()
    }),
      (err: any) => subscriber.error(err)
  })

export const reorderTodos = (todos: any, start: any, end: any) => {
  const newTodos: any = []

  const isMoveDown = start - end < 0

  if (isMoveDown) {
    todos.forEach((todo: any) => {
      if (todo.order > start && todo.order <= end) {
        newTodos.push({
          ...todo,
          order: todo.order - 1
        })
      } else if (todo.order === start) {
        newTodos.push({
          ...todo,
          order: end
        })
      } else {
        newTodos.push({ ...todo })
      }
    })
  } else {
    todos.forEach((todo: any) => {
      if (todo.order < start && todo.order >= end) {
        newTodos.push({
          ...todo,
          order: todo.order + 1
        })
      } else if (todo.order === start) {
        newTodos.push({
          ...todo,
          order: end
        })
      } else {
        newTodos.push({ ...todo })
      }
    })
  }

  return newTodos.sort((a: any, b: any) => a.order - b.order)
}
