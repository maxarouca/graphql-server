import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql'

import { nodeInterface, nodeField } from '../node/nodeInterface'

import { postType } from './posts/postSchema'
import { getPostById, getPosts } from './posts/postResolvers'
import { userType, tokenType } from './users/userSchema'
import { getUserById, login } from './users/userResolvers'

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
      type: GraphQLList(postType),
      resolve: (_, args, context) => getPosts(args, context),
    },
  },
})

export default QueryType
