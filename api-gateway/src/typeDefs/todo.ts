import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    todo(todoId: ID!): Todo! @auth
    todos(projectId: ID!): [Todo!]! @auth
  }

  extend type Mutation {
    createTodo(body: String!, order: Int!, projectId: ID!): Todo @auth
    editTodo(body: String!, done: Boolean!, order: Int!, todoId: ID!): Todo! @auth
    deleteTodo(todoId: ID!): Todo @auth
    reorderTodos(end: Int!, projectId: ID!, start: Int!): Boolean @auth
  }

  type Todo {
    id: ID!
    body: String!
    done: Boolean!
    order: Int!
    project: ID!
    user: ID!
    createdAt: String!
    updatedAt: String!
  }
`
