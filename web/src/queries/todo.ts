import { gql } from 'apollo-boost'

export const CREATE_TODO = gql`
  mutation CreateTodo($body: String!, $order: Int!, $projectId: ID!) {
    createTodo(body: $body, order: $order, projectId: $projectId) {
      id
      body
      done
      order
      user
      createdAt
      updatedAt
    }
  }
`

export const DELETE_TODO = gql`
  mutation DeleteTodo($todoId: ID!) {
    deleteTodo(todoId: $todoId) {
      id
    }
  }
`

export const EDIT_TODO = gql`
  mutation EditTodo($body: String!, $done: Boolean!, $order: Int!, $todoId: ID!) {
    editTodo(body: $body, done: $done, order: $order, todoId: $todoId) {
      id
      body
      done
      order
      user
      createdAt
      updatedAt
    }
  }
`

export const REORDER_TODOS = gql`
  mutation ReorderTodos($end: Int!, $projectId: ID!, $start: Int!) {
    reorderTodos(end: $end, projectId: $projectId, start: $start)
  }
`
