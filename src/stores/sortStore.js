import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSortStore = defineStore('sort', () => {
  const sortby = ref('asc')

  function setSort(order) {
    if (['asc', 'desc'].includes(order)) {
      sortby.value = order
    }
  }

  return { sortby, setSort }
})
