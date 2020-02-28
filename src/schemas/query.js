import { gql } from 'apollo-server'

const Query = gql`
  type Query {
    loggedUser: User
    users: [User]
    user(id: Int): User
    profiles: [Profile]
    profile(id: Int): Profile
  }
`
export default Query
