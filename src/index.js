import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'

import schemas from './schemas'
import resolvers from './resolvers'

import userModel from './models/userModel'
import postModel from './models/postModel'

const app = express()
app.use(cors())

const getUser = async (req) => {
  const { token } = req.headers

  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET)
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.')
    }
  }
}

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      const me = await getUser(req)

      return {
        me,
        models: {
          userModel,
          postModel,
        },
      }
    }
  },
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  console.log(`Executando na porta ${process.env.PORT}`)
})

/* EXEMPLO DE UTILIZAÇÃO DE FRAGMENT

query {
  user{
    ...fullUser
  }
}


fragment fullUser on User {
  id name email salary age vip
  profile {
    type
  }
}

*/
