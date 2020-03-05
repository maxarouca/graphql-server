import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql'
import { globalIdField } from 'graphql-relay'

import { nodeInterface, nodeField } from '../../node/nodeInterface'

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A User example',
  fields: {
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the User',
    },
    email: {
      type: GraphQLString,
      description: 'The email of the User',
    },
    posts: {
      type: GraphQLBoolean,
      description: 'The posts of the User',
    },
  },
  interfaces: [nodeInterface],
})

export const userInputType = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The name of the user',
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The email of the user',
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The password of the user',
    },
  },
})

export const tokenType = new GraphQLObjectType({
  name: 'Token',
  description: 'A Token when User is logged',
  fields: {
    id: globalIdField(),
    token: {
      type: GraphQLString,
      description: 'The token',
    },
  },
  interfaces: [nodeInterface],
})
