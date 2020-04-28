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

interface CreateProjectModalProps {
  handleCreateProject: (title: string) => Promise<void>
}

const CreateProjectModal = ({ handleCreateProject }: CreateProjectModalProps) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleSubmit = async (): Promise<void> => {
    if (!title.trim()) return

    await handleCreateProject(title)

    setTitle('')
    handleClose()
  }

  return (
    <>
      <Button className={classes.button} onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>Create a new project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a project, please enter project title here.
          </DialogContentText>
          <TextField
            id='name'
            autoComplete='off'
            autoFocus
            margin='dense'
            label='Project title'
            type='input'
            fullWidth
            onChange={({ target: { value } }) => setTitle(value)}
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

export default CreateProjectModal
