const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
type Query {
  allProducts: [Product]
  productDetails(pid: Int): Product
}
type Product {
    name: String
    visible: Boolean
    onSale: Boolean
    analyticsKey: String
    id: Int
    price: Price
}
type Price {
    currency: String
    divisor: Int
    amount: Int    
}
`

module.exports =  makeExecutableSchema({ typeDefs, resolvers })
