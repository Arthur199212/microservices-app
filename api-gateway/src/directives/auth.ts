import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver, GraphQLField } from 'graphql'
import { verifyAccessToken, getAccessToken } from '../auth'
import { Unauthorized } from '../errors'

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = function (parent, args, { req, res }, info) {
      const accessToken = getAccessToken(req)

      const { sub: userId }: any = verifyAccessToken(accessToken)

      if (!userId) throw new Unauthorized('You must be logged in')

      const newArgs = { ...args, userId }

      return resolve.apply(this, [ parent, newArgs, { req, res }, info ])
    }
  }
}

export default AuthDirective
