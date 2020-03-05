import { nodeDefinitions, fromGlobalId } from 'graphql-relay'
import { getPostById, getPosts } from '../modules/posts/postResolvers'
import { getUserById } from '../modules/users/userResolvers'
// import { postType } from '../modules/posts/postSchema'
// import { userType } from '../modules/users/userSchema'

const getObjectById = (type, id) => {
  const types = {
    posts: getPosts,
    post: getPostById,
    user: getUserById,
  }

  return types[type](id)
}

export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    return getObjectById(type, id)
  },
  (object) => {
    if (object.title) {
      return postType
    }
    if (object.name) {
      return userType
    }
    return null
  }
)
