import { profiles } from '../database'

const UserResolver = {
  salary(User) {
    return User.salary_real
  },
  profile(User) {
    const selected = profiles.filter((p) => p.id === User.profile_id)
    return selected ? selected[0] : null
  },
}

export default UserResolver
