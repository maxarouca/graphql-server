import { users, profiles } from '../database'

const Query = {
  ola() {
    return 'Retornar uma string'
  },
  horaAtual() {
    return new Date().toLocaleTimeString('pt-BR')
  },
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
  product() {
    return {
      name: 'Tenis',
      price: 199.99,
      discount: 0.3,
    }
  },
  users() {
    return users
  },
  user(_, { id }) {
    const selected = users.filter((u) => u.id === id)
    return selected ? selected[0] : null
  },
  profiles() {
    return profiles
  },
  profile(_, { id }) {
    const selected = profiles.filter((p) => p.id === id)
    return selected ? selected[0] : null
  },
}

export default Query
