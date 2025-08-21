import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '../data/products.json'

export const useProductStore = defineStore('product', () => {
  const productData = ref(data)
  const cartStock = ref(0)
  const cartItems = ref([])
  const counter = ref(0)

  function addToCart(productId) {
    const product = productData.value.find((p) => p.id === productId)

    if (product && product.stock > 0) {
      cartStock.value += 1
      product.stock -= 1
    }

    const cartItem = cartItems.value.find((item) => item.id == productId)

    if (cartItem) {
      cartItem.quantity += 1
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1,
      })
    }
  }
  // productData.value.forEach((product) => {
  //   if (product.id === productId && product.stock > 0) {
  //     product.stock -= 1
  //     cartStock.value += 1
  //   }
  // })

  return { counter, cartItems, productData, addToCart, cartStock }
})
