import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from 'apollo-boost'
import { onError } from 'apollo-link-error'
import { API_URI } from './config'
import { promiseToObservable } from './utils'
import { AuthService } from './services'

const httpLink = new HttpLink({
  uri: API_URI,
  credentials: 'include'
})

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = AuthService.getAccessToken()

  operation.setContext({
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    }
  })

  return forward(operation)
})

const authErrorLink = onError(({
  forward,
  graphQLErrors = [],
  operation
}) => {
  const { message } = graphQLErrors[0] || {}

  if (message?.includes('jwt expired') || message?.includes('Unauthorized')) {
    return promiseToObservable(AuthService.refreshAccessToken())
      .flatMap(() => forward(operation))
  }

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.map(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`))

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: ApolloLink.from([authErrorLink, errorLink, authLink, httpLink]),
  cache: new InMemoryCache()
})

export default client
