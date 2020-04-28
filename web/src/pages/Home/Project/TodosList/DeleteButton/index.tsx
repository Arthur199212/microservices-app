import { useMutation } from '@apollo/react-hooks'
import { IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import React from 'react'
import { DELETE_TODO } from '../../../../../queries'
import useStyles from './useStyles'

const DeleteButton = ({ refetchProjects, todoId }: any) => {
  const classes = useStyles()
  const [deleteTodo] = useMutation(DELETE_TODO)

  const handleDeleteTodo = async (): Promise<void> => {
    try {
      await deleteTodo({ variables: { todoId } })

      refetchProjects()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <IconButton
      className={classes.deleteButton}
      onClick={handleDeleteTodo}
    >
      <DeleteIcon color='primary' />
    </IconButton>
  )
}

export default DeleteButton
