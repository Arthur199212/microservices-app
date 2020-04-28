import { CssBaseline } from '@material-ui/core'
import {
  MuiThemeProvider,
  withStyles
} from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { styles, theme } from './styles'
import { ROUTES } from '../../config'
import Context from '../../context'
import { Home, LandingPage, Login, Profile, SignUp, NotFound } from '../../pages'
import { LocalStorageService, SELECTED_PROJECT } from '../../services'

const App = () => {
  const [selectedProject, setSelectedProject] = useState('')

  useEffect(() => {
    setSelectedProject(LocalStorageService.getData(SELECTED_PROJECT) || '')
  }, [])

  const getContext = () => ({
    selectedProject,
    setSelectedProject
  })

  return (
    <Context.Provider value={getContext()}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path={ROUTES.default}>
              <LandingPage />
            </Route>
            <Route path={ROUTES.home}>
              <Home />
            </Route>
            <Route path={ROUTES.login}>
              <Login />
            </Route>
            <Route path={ROUTES.signup}>
              <SignUp />
            </Route>
            <Route path={ROUTES.profile}>
              <Profile />
            </Route>
            <Route path={ROUTES.default}>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Context.Provider>
  )
}

export default withStyles(styles)(App)
