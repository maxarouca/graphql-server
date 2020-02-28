import { users, profiles } from '../database'
import filterUser from '../utils/filterUsers'

const Query = {
  loggedUser() {
    return {
      id: 123,
      name: 'Max Arouca',
      email: 'maximiler@gmail.com',
      age: 31,
      salary_real: 3500.55,
      vip: true,
    }
  },
  users() {
    return users
  },
  user(_, { filter }) {
    const i = filterUser(users, filter)
    console.log(i)

    const selected = i > -1 ? users[i] : null
    // users.filter((u) => u.id === id)
    return selected
  },
  profiles() {
    return profiles
  },
  // profile(_, { filter }) {
  //   const selected = profiles.filter((p) => p.id === id)
  //   return selected ? selected[0] : null
  // },
}

export default Query
