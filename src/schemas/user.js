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
    BLOQUED
  }

  type Profile {
    id: Int
    type: String!
  }
`

export default User
