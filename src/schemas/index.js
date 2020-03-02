import { gql } from 'apollo-server'
import userSchema from './userSchema'
import postSchema from './postSchema'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, userSchema, postSchema]
