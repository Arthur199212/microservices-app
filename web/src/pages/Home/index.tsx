import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'
import { ROUTES } from '../../config'
import { ME_QUERY } from '../../queries'
import { AuthService } from '../../services'
import Project from './Project'
import useStyles from './useStyles'

export const Home = () => {
  const classes = useStyles()
  const history = useHistory()
  const meQuery = useQuery(ME_QUERY, { fetchPolicy: 'network-only' })

  if (meQuery.error) {
    AuthService.refreshAccessToken()
      .then(() => meQuery.refetch())
      .catch(() => history.push(ROUTES.login))
  }

  if (meQuery.loading || !meQuery.data) return (
    <div className={classes.spinnerContainer}>
      <CircularProgress />
    </div>
  )

  return (
    <Layout>
      <Project />
    </Layout>
  )
}
