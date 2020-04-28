import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import useStyles from './useStyles'

interface AddTodoProps {
  handleAddTodo: (body: string) => Promise<void>
}

const AddTodo = ({ handleAddTodo }: AddTodoProps) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [body, setBody] = useState('')

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleSubmit = async (): Promise<void> => {
    if (!body.trim()) return

    await handleAddTodo(body)

    setBody('')
    handleClose()
  }

  return (
    <>
      <Button className={classes.button} onClick={handleClickOpen}>
        <AddIcon className={classes.addButton} /> Add Todo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>Create a new todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a todo, please enter todo title here.
          </DialogContentText>
          <TextField
            id='name'
            autoComplete='off'
            autoFocus
            margin='dense'
            label='Todo title'
            type='input'
            fullWidth
            onChange={({ target: { value } }) => setBody(value)}
            onKeyDown={(e) => {if (e.key === 'Enter') handleSubmit()}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTodo
