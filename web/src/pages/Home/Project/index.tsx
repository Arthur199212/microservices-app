import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import React, { useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Context from '../../../context'
import {
  CREATE_TODO,
  DELETE_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  REORDER_TODOS
} from '../../../queries'
import { reorderTodos } from '../../../utils'
import AddTodo from './AddTodo'
import ProjectHeader from './ProjectHeader'
import TodosList from './TodosList'
import useStyles from './useStyles'

const Project = () => {
  const classes = useStyles()
  const client = useApolloClient()

  const { selectedProject }: any = useContext(Context)

  const projectQuery = useQuery(GET_PROJECT, {
    variables: {
      projectId: selectedProject
    }
  })
  const [createTodo] = useMutation(CREATE_TODO)
  const [deleteProject] = useMutation(DELETE_PROJECT)
  const [reorderTodosMutation] = useMutation(REORDER_TODOS)

  const handleAddTodo = async (body: string): Promise<void> => {
    try {
      const order = projectQuery.data?.project?.todos?.length || 0

      await createTodo({
        variables: {
          body,
          order,
          projectId: selectedProject
        }
      })

      projectQuery.refetch()
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteProject = async (): Promise<void> => {
    try {
      await deleteProject({ variables: { projectId: selectedProject } })

      const { project }: any = client.readQuery({
        query: GET_PROJECT,
        variables: { projectId: selectedProject }
      })
      client.writeQuery({
        query: GET_PROJECT,
        variables: { projectId: selectedProject },
        data: {
          project: { ...project, id: '', title: '', todos: [] }
        }
      })
      const { projects }: any = client.readQuery({
        query: GET_PROJECTS
      })
      client.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter(({ id }: any) => id !== selectedProject)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onDragEnd = async (result: any): Promise<void> => {
    if (!result.destination) {
      return
    }

    const end = result.destination.index
    const start = result.source.index

    const todos: any = reorderTodos(
      projectQuery.data.project.todos,
      start,
      end
    )

    const { project }: any = client.readQuery({
      query: GET_PROJECT,
      variables: { projectId: selectedProject }
    })
    client.writeQuery({
      query: GET_PROJECT,
      variables: { projectId: selectedProject },
      data: {
        project: {
          ...project,
          todos
        }
      }
    })

    try {
      await reorderTodosMutation({
        variables: {
          end,
          projectId: selectedProject,
          start
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {projectQuery.loading && (
        <div>Loading ...</div>
      )}

      {projectQuery.data?.project?.id && !projectQuery.loading && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <div>
                <ProjectHeader
                  handleDeleteProject={handleDeleteProject}
                  projectTitle={projectQuery.data.project.title}
                />

                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={classes.todoListContainer}
                >
                  <TodosList
                    todos={projectQuery.data.project.todos}
                    refetchProjects={projectQuery.refetch}
                  />
                  {provided.placeholder}
                </div>

                < AddTodo
                  handleAddTodo={handleAddTodo}
                />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  )
}

export default Project
