import { users, nextId } from '../database'
import filterUser from '../utils/filterUsers'

const mutationResolvers = {
  newUser(_, { data: { name, email, age } }) {
    const isEmailExists = users.some((u) => u.email === email)

    if (isEmailExists) {
      throw new Error('E-mail already registered')
    }

    const newUser = {
      id: nextId(),
      name,
      email,
      age,
      profile_id: 1,
      status: 'ACTIVE',
    }

    users.push(newUser)

    return newUser
  },

  destroyUser(_, { filter }) {
    const i = filterUser(users, filter)
    if (i < 0) return null

    const removed = users.splice(i, 1)
    return removed ? removed[0] : null
  },
  updateUser(_, { filter, data }) {
    const i = filterUser(users, filter)

    if (i < 0) return null

    const updated = {
      ...users[i],
      ...data,
    }
    users.splice(i, 1, updated)
    return updated
  },
}

export default mutationResolvers
