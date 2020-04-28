import {
  Checkbox,
  ClickAwayListener,
  Input,
  Typography
} from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'
import React from 'react'
import useStyles from './useStyles'

const TodoItem = ({
  body,
  done,
  order,
  editing,
  handleActivateEditTodo,
  handleClickAway,
  handleSubmit,
  handleToggleTodo,
  setTodoBody,
  todoBody,
  todoId
}: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Checkbox
        checked={done}
        onClick={() => handleToggleTodo({ body, done, order, todoId })}
        color='primary'
      />
      {editing !== todoId && (
        <>
          <Typography variant='body1'>
            {body}
          </Typography>
          <EditIcon
            className={classes.editButton}
            onClick={(e) => handleActivateEditTodo(e, { body, order, todoId })}
          />
        </>
      )}
      {editing === todoId && (
        <ClickAwayListener onClickAway={() => handleClickAway({ done, order, todoId })}>
          <Input
            className={classes.todoInput}
            value={todoBody}
            autoFocus
            onFocus={(e) => { e.target.select() }}
            onKeyDown={(e) => handleSubmit(e, { done, order, todoId })}
            onChange={(e) => { if (e.target.value) setTodoBody(e.target.value) }}
          />
        </ClickAwayListener>
      )}
    </div>
  )
}

export default TodoItem
