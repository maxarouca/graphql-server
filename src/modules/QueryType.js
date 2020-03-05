import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql'

import {
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
} from 'graphql-relay'

import { nodeField } from '../node/nodeInterface'

import { postType } from './posts/postSchema'
import { getPostById, getPosts } from './posts/postResolvers'
import { userType, tokenType } from './users/userSchema'
import { getUserById, login } from './users/userResolvers'

export const { connectionType: PostConnection } = connectionDefinitions({
  nodeType: postType,
})

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    node: nodeField,
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the user.',
        },
      },
      resolve: (_, args, context) => getUserById(args, context),
    },
    login: {
      type: tokenType,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The email of the user.',
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The password of the user.',
        },
      },
      resolve: (_, args, context) => login(args, context),
    },
    post: {
      type: postType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the post.',
        },
      },
      resolve: (_, args, context) => getPostById(args, context),
    },
    posts: {
      type: PostConnection,
      args: connectionArgs,
      resolve: (_, args, context) =>
        connectionFromPromisedArray(getPosts(args, context)),
    },
  },
})

export default QueryType
