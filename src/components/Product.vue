<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useToPersianStore } from '@/stores/topersiannumberStore'

defineOptions({
  name: 'Product',
})

const productStore = useProductStore()
const productData = productStore.productData

const toPersianNumber = useToPersianStore()
</script>

<template>
  <div
    v-for="product in productData"
    :key="product.id"
    class="bg-white w-[200px] flex flex-col rounded-xl p-2 shadow-sm hover:shadow-xl"
  >
    <div class="img-wrapper h-60">
      <img class="w-full h-full rounded-xl object-fit" :src="product.image" alt="" />
    </div>
    <p class="product-name font-semibold mt-2 text-gray-600">{{ product.title }}</p>
    <div class="product-tags flex justify-right items-center gap-1.5 h-[78px] mt-3 flex-wrap">
      <span
        v-for="(tag, index) in product.tag"
        :key="index"
        class="p-2 bg-gray-100 rounded-lg text-gray-500 text-sm"
        >{{ tag }}</span
      >
    </div>
    <div class="flex justify-between item-center flex-row mt-5">
      <div class="flex justify-center items-center gap-1 bg-red-600 px-2 py-1 rounded-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-box-icon lucide-box text-white"
        >
          <path
            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
        <span class="stock text-xs text-white">{{
          toPersianNumber.toPersianNumber(product.stock)
        }}</span>
      </div>
      <p class="product-price text-left font-bold text-gray-600">
        {{ toPersianNumber.toPersianNumber(product.price) }}
        <span class="text-sm text-gray-500">تومان</span>
      </p>
    </div>
    <button
      @click="productStore.addToCart(product.id)"
      class="text-sm border-1 w-full mt-3 p-2 rounded-lg text-blue-700 hover:bg-blue-700 hover:text-white"
    >
      افزودن به سبد خرید
    </button>
  </div>
</template>

<style scoped></style>
