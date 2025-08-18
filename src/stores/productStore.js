import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '../data/products.json'

export const useProductStore = defineStore('product', () => {
  const productData = ref(data)
  const cartStock = ref(0)

  function addToCart(productId) {
    productData.value.forEach((product) => {
      if (product.id === productId && product.stock > 0) {
        product.stock -= 1
        cartStock.value += 1
      }
    })
  }

  return { productData, addToCart, cartStock }
})
