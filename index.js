import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    finalPrice: Float!
  }

  # Pontos de entrada da sua API
  type Query {
    ola: String!
    horaAtual: Date!
    loggedUser: User
    product: Product
  }
`

const resolvers = {
  User: {
    salary(User) {
      return User.salary_real
    },
  },
  Product: {
    finalPrice(Product) {
      const { price, discount } = Product
      if (discount) {
        Product.finalPrice = price - discount
        return Product.finalPrice
      }
      return Product.price
    },
  },
  Query: {
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
        discount: 30,
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
