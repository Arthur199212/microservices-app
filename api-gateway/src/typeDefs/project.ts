import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    project(projectId: ID!): Project! @auth
    projects: [Project!]! @auth
  }

  extend type Mutation {
    createProject(title: String): Project @auth
    editProject(title: String!, projectId: ID!): Project! @auth
    deleteProject(projectId: ID!): Project @auth
  }

  type Project {
    id: ID!
    title: String!
    todos: [Todo!]! @auth
    user: ID!
    createdAt: String!
    updatedAt: String!
  }
`
