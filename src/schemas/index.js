import { gql } from 'apollo-server'

import Product from './product'
import Query from './query'
import User from './user'

const Date = gql`
  scalar Date
`

const schema = [Date, Product, Query, User]

export default schema
