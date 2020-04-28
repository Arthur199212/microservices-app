import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../config'
import HeaderMenu from './HeaderMenu'
import useStyles from './useStyles'

interface HeaderProps {
  handleDrawerToggle: () => void
}

const Header = ({ handleDrawerToggle }: HeaderProps) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color='inherit'
          edge='start'
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Link className={classes.title} to={ROUTES.home}>
          <Typography variant='h6' noWrap>
            Todo App
          </Typography>
        </Link>
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
