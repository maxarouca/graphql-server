import { AuthenticationError } from 'apollo-server'

export default async ({ title, content }, { models: { postModel }, me }) => {
  if (!me) {
    throw new AuthenticationError('You are not authenticated')
  }
  const post = await postModel.create({ title, content, author: me.id })
  return post
}
