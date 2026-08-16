<script setup>
import { useProductStore } from '@/stores/productStore'
import { useToPersianStore } from '@/stores/topersiannumberStore'

const productStore = useProductStore()
const toPersianNumber = useToPersianStore()

defineOptions({
  name: 'Header',
})
</script>

<template>
  <header class="container mx-auto px-4 sm:px-6 lg:px-15">
    <div
      class="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 shadow-xs px-4 py-3 rounded-b-xl bg-white"
    >
      <div
        class="order-1 w-[140px] h-[90px] sm:w-[150px] sm:h-[100px] lg:w-[180px] lg:h-[120px] shrink-0"
      >
        <router-link to="/">
          <img
            class="object-cover w-full h-full"
            src="/public/images/history-book-education-logo-design-concept-history-book-education-logo-design-concept-tree-book-creative-vector-279321333.webp"
            alt=""
          />
        </router-link>
      </div>

      <router-link to="/cart" class="order-2 sm:order-3">
        <div
          class="flex justify-center items-center gap-1 py-2 px-2 rounded-lg"
          style="background: linear-gradient(333.67deg, #f6f8fb 68%, #ebedf0 110.46%)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide text-gray-700 lucide-shopping-bag-icon lucide-shopping-bag"
          >
            <path d="M16 10a4 4 0 0 1-8 0" />
            <path d="M3.103 6.034h17.794" />
            <path
              d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
            />
          </svg>

          <span class="py-1 px-3 h-fit bg-white text-red-600 rounded-full mr-3 leading-6">{{
            toPersianNumber.toPersianNumber(productStore.cartStock)
          }}</span>
        </div>
      </router-link>

      <input
        class="order-3 sm:order-2 basis-full sm:basis-auto w-full sm:w-[220px] md:w-[320px] lg:w-[500px] rounded-md p-3 outline-0 text-gray-700 text-sm"
        style="background: linear-gradient(333.67deg, #f6f8fb 68%, #ebedf0 110.46%)"
        type="text"
        v-model="productStore.searchQuery"
        placeholder="محصول خود را جستجو کنید..."
      />
    </div>
  </header>
</template>

<style scoped></style>
