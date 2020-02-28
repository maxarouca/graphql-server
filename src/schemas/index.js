import { gql } from 'apollo-server'

import Query from './query'
import User from './user'

const Date = gql`
  scalar Date
`

const schema = [Date, Query, User]

export default schema
