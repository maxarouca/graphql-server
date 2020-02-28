import { gql } from 'apollo-server'

import Query from './query'
import User from './user'
import Mutation from './mutation'

const Date = gql`
  scalar Date
`

const schema = [Date, Query, User, Mutation]

export default schema
