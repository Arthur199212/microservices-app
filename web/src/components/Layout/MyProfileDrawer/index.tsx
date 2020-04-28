import {
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from '@material-ui/core'
import React from 'react'
import useStyles from './useStyles'

// Mock data
const drawerList = [
  { id: 'drawerList-1', name: 'Settings' },
  { id: 'drawerList-2', name: 'Personal info' }
]

const MyDrawer = () => {
  const classes = useStyles()

  return (
    <>
      <Hidden xsDown>
        <Toolbar />
      </Hidden>

      <List component='div' disablePadding>
        {drawerList.map(({ id, name }: any) => (
          <ListItem
            key={id}
            className={classes.nested}
            button
          >
            <ListItemText primary={`${name.length > 18 ? `${name.slice(0, 17)}...` : name}`} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default MyDrawer
