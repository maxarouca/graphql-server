import { GraphQLObjectType, GraphQLNonNull } from 'graphql'

import createPost from './posts/postMutations'
import createUser from './users/userMutations'
import { postType, postInputType } from './posts/postSchema'
import { userType, userInputType } from './users/userSchema'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    createPost: {
      type: postType,
      args: {
        post: {
          type: new GraphQLNonNull(postInputType),
        },
      },
      resolve: (_, args, context) => createPost(args.post, context),
    },
    createUser: {
      type: userType,
      args: {
        user: {
          type: new GraphQLNonNull(userInputType),
        },
      },
      resolve: (_, args, context) => createUser(args.user, context),
    },
  },
})

export default MutationType
