import { gql } from 'apollo-server'

const mutations = gql`
  type Mutation {
    newUser(data: UserInput!): User
    destroyUser(filter: FilterUser!): User
    updateUser(filter: FilterUser!, data: UserInput): User
  }
`

export default mutations
