import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    me: User @auth
  }

  extend type Mutation {
    createUser(email: String!, password: String!): AccessToken
    logIn(email: String!, password: String!): AccessToken @guest
    logOut: Boolean! @auth
  }

  type User {
    id: ID!
    email: String!
    projects: [Project!]! @auth
    createdAt: String!
    updatedAt: String!
  }

  type AccessToken {
    accessToken: String!
  }
`
