import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout } from '../../components'
import { DRAWER } from '../../components/Layout'
import { ROUTES } from '../../config'
import { AuthService } from '../../services'
import { ME_QUERY } from '../../queries'
import useStyles from './useStyles'

export const Profile = () => {
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
    <Layout drawer={DRAWER.profile}>
      <div className={classes.root}>
        <h2 className={classes.title}>
          Profile
        </h2>

        <div className={classes.email}>
          {meQuery.data && (
            <div>My email: {meQuery.data.me.email}</div>
          )}
        </div>
      </div>
    </Layout>
  )
}
