const ProductResolver = {
  finalPrice(Product) {
    const { price, discount } = Product
    if (discount) {
      Product.finalPrice = price * (1 - discount)
      return Product.finalPrice
    }
    return Product.price
  },
}

export default ProductResolver
