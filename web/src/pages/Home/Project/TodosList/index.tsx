import { useMutation } from '@apollo/react-hooks'
import React, { useState, MouseEvent, KeyboardEvent } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { EDIT_TODO } from '../../../../queries'
import DeleteButton from './DeleteButton'
import TodoItem from './TodoItem'
import useStyles from './useStyles'

const TodosList = ({ refetchProjects, todos }: any) => {
  const classes = useStyles()

  const [editing, setEditing] = useState('')
  const [todoBody, setTodoBody] = useState('')

  const [editTodo] = useMutation(EDIT_TODO)

  const handleActivateEditTodo = (e: MouseEvent, { body, todoId }: any): void => {
    setTodoBody(body)
    setEditing(todoId)
  }

  const handleClickAway = async ({ done, order, todoId }: any): Promise<void> => {
    try {
      await editTodo({ variables: { body: todoBody, done, order, todoId } })

      refetchProjects()
    } catch (err) {
      console.log(err)
    }

    setEditing('')
    setTodoBody('')
  }

  const handleSubmit = async (e: KeyboardEvent, { done, order, todoId }: any): Promise<void> => {
    if (e.key === 'Enter') {
      try {
        await editTodo({ variables: { body: todoBody, done, order, todoId } })

        refetchProjects()
      } catch (err) {
        console.log(err)
      }

      setEditing('')
      setTodoBody('')
    }
  }

  const handleToggleTodo = async ({ body, done, order, todoId }: any): Promise<void> => {
    try {
      await editTodo({ variables: { body, done: !done, order, todoId } })

      refetchProjects()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {todos.map(({ id, body, done, order }: any) => (
        <Draggable key={id} draggableId={id} index={order}>
          {(provided) => (
            <div
              key={id}
              className={classes.todo}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoItem
                body={body}
                done={done}
                order={order}
                editing={editing}
                handleActivateEditTodo={handleActivateEditTodo}
                handleClickAway={handleClickAway}
                handleSubmit={handleSubmit}
                handleToggleTodo={handleToggleTodo}
                setTodoBody={setTodoBody}
                todoBody={todoBody}
                todoId={id}
              />

              <DeleteButton
                refetchProjects={refetchProjects}
                todoId={id}
              />
            </div>
          )}
        </Draggable>
      ))}
    </>
  )
}

export default TodosList
