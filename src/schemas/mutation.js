import { gql } from 'apollo-server'

const mutations = gql`
  type Mutation {
    newUser(data: UserInput!): User
    destroyUser(filter: FilterUser!): User
    updateUser(id: Int!, name: String!, email: String!, age: Int): User
  }
`

export default mutations
