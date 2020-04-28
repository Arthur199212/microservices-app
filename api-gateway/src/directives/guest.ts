import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver, GraphQLField } from 'graphql'
import { isLoggedIn } from '../auth'
import { Unauthorized } from '../errors'

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = function (...args) {
      const [, , { req }] = args

      if (isLoggedIn(req)) throw new Unauthorized('You are already logged in')

      return resolve.apply(this, args)
    }
  }
}

export default AuthDirective
