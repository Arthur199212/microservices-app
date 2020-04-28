import { IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import React from 'react'
import useStyles from './useStyles'

const ProjectHeader = ({ handleDeleteProject, projectTitle }: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>
        {projectTitle}
      </h2>
      <IconButton onClick={handleDeleteProject} color='primary'>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default ProjectHeader
