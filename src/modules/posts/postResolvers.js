import { AuthenticationError } from 'apollo-server'

export const getPostById = async ({ id }, { models: { postModel }, me }) => {
  if (!me) {
    throw new AuthenticationError('You are not authenticated')
  }
  const post = await postModel.findById({ _id: id }).exec()
  return post
}

export const getPosts = async (args, { models: { postModel }, me }) => {
  if (!me) {
    throw new AuthenticationError('You are not authenticated')
  }
  const posts = await postModel.find({ author: me.id }).exec()
  return posts
}

export const getAuthorById = async (
  { author },
  args,
  { models: { userModel } }
) => {
  const user = await userModel.findById({ _id: author }).exec()
  return user
}
