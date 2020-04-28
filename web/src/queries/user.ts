import { gql } from 'apollo-boost'

export const ME_QUERY = gql`
  {
    me {
      id
      email
      createdAt
      updatedAt
    }
  }
`

export const LOG_OUT = gql`
  mutation LogOut {
    logOut
  }
`
