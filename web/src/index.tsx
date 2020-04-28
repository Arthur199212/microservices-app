import { ApolloProvider } from '@apollo/react-hooks'
import * as React from 'react'
import { render } from 'react-dom'
import client from './apolloClient'
import { App } from './components'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
