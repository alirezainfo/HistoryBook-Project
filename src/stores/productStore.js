import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import data from '../data/products.json'
import Swal from 'sweetalert2'
import { useSortStore } from './sortStore'

export const useProductStore = defineStore('product', () => {
  const productData = ref(data)
  const cartStock = ref(0)
  const cartItems = ref([])
  const counter = ref(0)
  const isDisabled = ref(false)
  const isChecked = ref(false)
  const tagFilters = ref([])

  const sortStore = useSortStore()

  const filteredAndSortedProducts = computed(() => {
    let products = [...productData.value]

    if (sortStore.sortby === 'asc') {
      products.sort((a, b) => a.price - b.price)
    } else if (sortStore.sortby === 'desc') {
      products.sort((a, b) => b.price - a.price)
    }

    if (isChecked.value === true) {
      products = products.filter((p) => p.stock > 0)
    }

    if (tagFilters.value.length > 0) {
      products = products.filter((p) => tagFilters.value.every((t) => p.tag.includes(t)))
    }

    return products
  })

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

  function addToCart(productId) {
    const product = productData.value.find((p) => p.id === productId)
    if (product.stock > 0) {
      showToast('محصول به سبد خرید اضافه شد.', 'success')
      isDisabled.value = true
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
    } else {
      showToast('محصول در انبار موجود نیست.', 'error')
    }
  }

  return {
    filteredAndSortedProducts,
    showToast,
    counter,
    cartItems,
    productData,
    addToCart,
    cartStock,
    isChecked,
    tagFilters,
  }
})
