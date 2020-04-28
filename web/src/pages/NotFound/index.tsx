import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config'
import useStyles from './useStyles'

export const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom>
        Error 404: Page not found
      </Typography>
      <Link className={classes.link} to={ROUTES.home}>
        Go home
      </Link>
    </div>
  )
}
