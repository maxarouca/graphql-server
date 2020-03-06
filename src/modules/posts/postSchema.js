import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql'
import { globalIdField } from 'graphql-relay'

import { nodeInterface } from '../../node/nodeInterface'
import { userType } from '../users/userSchema'

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'A Post example',
  fields: {
    id: globalIdField(),
    title: {
      type: GraphQLString,
      description: 'The title of the Post',
    },
    content: {
      type: GraphQLString,
      description: 'The content of the Post',
    },
    author: {
      type: userType,
      description: 'The author of the Post',
    },
  },
  interfaces: [nodeInterface],
})

export const postInputType = new GraphQLInputObjectType({
  name: 'postInput',
  fields: {
    title: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The title of the post',
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The content of the post',
    },
    author: {
      type: GraphQLString,
      description: 'The author of the Post',
    },
  },
})
