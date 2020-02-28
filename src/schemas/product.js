import { gql } from 'apollo-server'

const Product = gql`
  type Product {
    name: String!
    price: Float!
    discount: Float
    finalPrice: Float!
  }
`

export default Product
