import { ApolloServer } from 'apollo-server'
import schema from './schemas'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})

/* EXEMPLO DE UTILIZAÇÃO DE FRAGMENT

query {
  user{
    ...fullUser
  }
}


fragment fullUser on User {
  id name email salary age vip
  profile {
    type
  }
}

*/
