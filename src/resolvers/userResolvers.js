import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

export default {
  Query: {
    user: async (_, { id }, { models: { userModel }, me }) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated')
      }
      const user = await userModel.findById({ _id: id }).exec()
      return user
    },
    login: async (_, { email, password }, { models: { userModel } }) => {
      const user = await userModel.findOne({ email }).exec()

      if (!user) {
        throw new AuthenticationError('Invalid credentials')
      }

      const matchPasswords = bcrypt.compareSync(password, user.password)

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials')
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 24 * 10 * 50,
      })

      return {
        token,
      }
    },
  },
  Mutation: {
    createUser: async (
      _,
      { name, email, password },
      { models: { userModel } }
    ) => {
      const user = await userModel.create({ name, email, password })
      return user
    },
  },
  User: {
    posts: async ({ id }, args, { models: { postModel } }) => {
      const posts = await postModel.find({ author: id }).exec()
      return posts
    },
  },
}
