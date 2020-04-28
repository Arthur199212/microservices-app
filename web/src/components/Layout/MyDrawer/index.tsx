import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  CircularProgress,
  Collapse,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from '@material-ui/core'
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowRight as ArrowRightIcon
} from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import Context from '../../../context'
import { LocalStorageService, SELECTED_PROJECT } from '../../../services'
import { CREATE_PROJECT, GET_PROJECTS } from '../../../queries'
import CreateProjectModal from './CreateProjectModal'
import useStyles from './useStyles'

const MyDrawer = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const { loading, data, refetch } = useQuery(GET_PROJECTS)
  const [createProject] = useMutation(CREATE_PROJECT)
  const { selectedProject, setSelectedProject }: any = useContext(Context)

  const handleClick = () => setOpen(!open)

  const handleCreateProject = async (title: string): Promise<void> => {
    await createProject({ variables: { title }})

    refetch()
  }

  const handleSelectProject = (id: string): void => {
    LocalStorageService.setData(SELECTED_PROJECT, id)
    setSelectedProject(id)
  }

  return (
    <>
      <Hidden xsDown>
        <Toolbar />
      </Hidden>

      <div className={classes.listItemContainer}>
        <ListItem button>
          {open ? <ArrowDropDownIcon onClick={handleClick} /> : <ArrowRightIcon onClick={handleClick} />}
          <ListItemText primary='Projects' onClick={handleClick} />
        </ListItem>

        <CreateProjectModal handleCreateProject={handleCreateProject} />
      </div>

      {loading && !data && (
        <CircularProgress />
      )}

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {data && (data.projects.map(({ id, title, todos }: any) => (
            <ListItem
              key={id}
              className={classes.nested}
              button
              selected={selectedProject === id}
              onClick={() => handleSelectProject(id)}
            >
              <ListItemText primary={`${title.length > 18 ? `${title.slice(0, 17)}...` : title} (${todos.length})`} />
            </ListItem>
          )))}
        </List>
      </Collapse>
    </>
  )
}

export default MyDrawer
