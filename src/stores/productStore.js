import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '../data/products.json'
import Swal from 'sweetalert2'

export const useProductStore = defineStore('product', () => {
  const productData = ref(data)
  const cartStock = ref(0)
  const cartItems = ref([])
  const counter = ref(0)
  const isDisabled = ref(false)

  function showToast(title, icon) {
    Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    }).fire({
      icon: icon,
      title: title,
    })
  }

  // function showAlert() {
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'محصول به سبد خرید اضافه شد.',
  //   })
  // }

  function addToCart(productId) {
    showToast('محصول به سبد خرید اضافه شد.', 'success')
    isDisabled.value = true
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
        product,
        quantity: 1,
      })
    }
    product.isAdded = true
  }
  // productData.value.forEach((product) => {
  //   if (product.id === productId && product.stock > 0) {
  //     product.stock -= 1
  //     cartSto ck.value += 1
  //   }
  // })

  return { showToast, counter, cartItems, productData, addToCart, cartStock }
})
