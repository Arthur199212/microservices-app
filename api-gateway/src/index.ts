import { ApolloServer } from 'apollo-server-express'
import createApp from './app'
import schemaDirectives from './directives'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import { APP_PORT, IN_PROD } from './config'

;(async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req, res }) => ({ req, res }),
      playground: !IN_PROD,
      schemaDirectives
    })

    const app = createApp()

    server.applyMiddleware({ app, cors: false, path: '/graphql' })

    app.listen(APP_PORT, () =>
      console.log(
        `api-gateway is running at http://localhost:${APP_PORT}${server.graphqlPath}`
      )
    )
  } catch (err) {
    console.log(err)
  }
})()
