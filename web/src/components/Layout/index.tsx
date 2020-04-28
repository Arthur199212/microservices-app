import {
  Container,
  Drawer,
  Hidden,
  Toolbar
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Header from './Header'
import MyDrawer from './MyDrawer'
import MyProfileDrawer from './MyProfileDrawer'
import useStyles from './useStyles'

interface LayoutProps {
  children: React.ReactNode
  container?: any
  drawer?: string
}

export const DRAWER = {
  profile: 'profile'
}

const Layout = ({ children, container, drawer }: LayoutProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const getDrawerComponent = () => drawer === DRAWER.profile ? <MyProfileDrawer /> : <MyDrawer />

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />

      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {getDrawerComponent()}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {getDrawerComponent()}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <Toolbar />

        <Container maxWidth='md'>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout
