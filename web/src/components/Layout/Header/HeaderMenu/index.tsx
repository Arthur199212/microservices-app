import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ROUTES } from '../../../../config'
import { AuthService } from '../../../../services'
import { LOG_OUT } from '../../../../queries'
import useStyles from './useStyles'

const HeaderMenu = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [logOut] = useMutation(LOG_OUT)
  const client = useApolloClient()
  const history = useHistory()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => setAnchorEl(null)

  const handleLogOut = (): void => {
    logOut().then(() => AuthService.setAccessToken(''))
    handleClose()
    client.clearStore()
    history.push(ROUTES.login)
  }

  return (
    <div>
      <IconButton className={classes.button} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={ROUTES.home}>
          <MenuItem onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to={ROUTES.profile}>
          <MenuItem onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleLogOut}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default HeaderMenu
