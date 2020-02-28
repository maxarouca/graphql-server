import { gql } from 'apollo-server'

const User = gql`
  type User {
    id: Int
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
    profile: Profile
    status: UserStatus
  }

  enum UserStatus {
    ACTIVE
    INACTIVE
    BLOCKED
  }

  type Profile {
    id: Int
    type: String!
  }

  input UserInput {
    name: String
    email: String
    age: Int
  }

  input FilterUser {
    id: Int
    email: String
  }
`

export default User
