import { gql } from 'apollo-boost'

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!) {
    createProject(title: $title) {
      id
      title
      user
      createdAt
      updatedAt
    }
  }
`

export const DELETE_PROJECT = gql`
  mutation DeleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
      id
    }
  }
`

export const GET_PROJECT = gql`
  query Project($projectId: ID!) {
    project(projectId: $projectId) {
      id
      title
      todos {
        id
        body
        order
        done
        createdAt
      }
    }
  }
`

export const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      todos {
        id
        body
        done
        order
      }
    }
  }
`
