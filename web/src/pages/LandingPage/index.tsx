import { useQuery } from '@apollo/react-hooks'
import {
  AppBar,
  Button,
  CircularProgress,
  Toolbar,
  Typography
} from '@material-ui/core'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { ROUTES } from '../../config'
import { ME_QUERY } from '../../queries'
import { AuthService } from '../../services'
import useStyles from './useStyles'

export const LandingPage = () => {
  const classes = useStyles()
  const meQuery = useQuery(ME_QUERY, { fetchPolicy: 'network-only' })

  if (meQuery.error) {
    AuthService.refreshAccessToken()
      .then(() => meQuery.refetch())
  }

  if (meQuery.data) {
    return <Redirect to={ROUTES.home} />
  }

  if (meQuery.loading) return (
    <div className={classes.spinnerContainer}>
      <CircularProgress />
    </div>
  )

  return (
    <>
      <div className={classes.mainScreen}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.logo}>
              Todo App
            </Typography>
            <Link to={ROUTES.login}>
              <Button color='inherit'>Login</Button>
            </Link>
            <Link to={ROUTES.signup}>
              <Button color='inherit'>Sign Up</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <div className={classes.titleContainer}>
          <Typography variant='h2'>
            Organize it all
          </Typography>
          <Typography variant='h2'>
            with Todo App
          </Typography>

          <Link to={ROUTES.signup}>
            <Button
              className={classes.getStartedButton}
              variant='contained'
              color='primary'
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
