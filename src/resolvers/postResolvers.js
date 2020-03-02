import { AuthenticationError } from 'apollo-server'

export default {
  Query: {
    post: async (_, { id }, { models: { postModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated')
      }
      const post = await postModel.findById({ _id: id }).exec()
      return post
    },
    posts: async (_, args, { models: { postModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated')
      }
      const posts = await postModel.find({ author: me.id }).exec()
      return posts
    },
  },
  Mutation: {
    createPost: async (
      _,
      { title, content },
      { models: { postModel }, me }
    ) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated')
      }
      const post = await postModel.create({ title, content, author: me.id })
      return post
    },
  },
  Post: {
    author: async ({ author }, args, { models: { userModel } }) => {
      const user = await userModel.findById({ _id: author }).exec()
      return user
    },
  },
}
