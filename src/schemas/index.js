import { GraphQLSchema } from 'graphql'

import QueryType from '../modules/QueryType'
import MutationType from '../modules/MutationType'

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})

export default schema
