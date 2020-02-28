import { gql } from 'apollo-server'

const Query = gql`
  type Query {
    ola: String!
    horaAtual: Date!
    loggedUser: User
    product: Product
    users: [User]
    user(id: Int): User
    profiles: [Profile]
    profile(id: Int): Profile
  }
`
export default Query
