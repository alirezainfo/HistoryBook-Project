<script setup>
import { ref } from 'vue'
import Products from './Products.vue'
import { useSortStore } from '@/stores/sortStore'
import { useProductStore } from '@/stores/productStore'
import { useToPersianStore } from '@/stores/topersiannumberStore'

defineOptions({
  name: 'Home',
})
const sortStore = useSortStore()
const productStore = useProductStore()
const toPersianNumber = useToPersianStore()

const tagSearch = ref('')
const showFilters = ref(false)

function deleteFilterTag(tag) {
  productStore.tagFilters = productStore.tagFilters.filter((t) => t !== tag)
}

function tagSearchFunc() {
  if (tagSearch.value !== '') {
    productStore.tagFilters.push(tagSearch.value.trim())
    tagSearch.value = ''
  }
}
</script>

<template>
  <main
    class="container mx-auto px-4 sm:px-6 lg:px-15 mt-6 lg:mt-10 flex flex-col lg:flex-row justify-start items-start gap-4"
  >
    <section class="filter-sec w-full lg:w-auto">
      <button
        @click="showFilters = !showFilters"
        class="lg:hidden flex justify-between items-center w-full bg-white p-3 rounded-xl border-1 border-gray-300 cursor-pointer"
      >
        <span class="text-sm font-semibold text-gray-700">فیلترها</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-gray-500 transition-transform duration-200"
          :class="showFilters ? 'rotate-180' : ''"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out lg:!grid-rows-[1fr]"
        :class="showFilters ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="min-h-0">
          <div
            class="w-full lg:w-[250px] bg-white p-4 rounded-xl flex flex-col border-1 border-gray-300 mt-2 lg:mt-0"
          >
            <p class="text-xs text-gray-500 text-center">
              تگ مورد نظر را بنویسید و <span class="text-red-600">Enter</span> را بزنید.
            </p>
            <input
              class="bg-gray-100 text-gray-600 text-xs p-3 rounded-sm outline-0 mt-2 w-full"
              type="text"
              v-model="tagSearch"
              @keyup.enter="tagSearchFunc"
              placeholder="جستجو براساس تگ"
            />
            <div class="product-tags flex justify-right items-center gap-1.5 mt-3 flex-wrap">
              <p
                v-for="(tag, index) in productStore.tagFilters"
                @click="deleteFilterTag(tag)"
                :key="index"
                class="p-2 bg-gray-100 rounded-lg text-gray-500 text-xs flex justify-center items-center gap-1"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-x-icon lucide-circle-x text-red-500 cursor-pointer"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" /></svg
                ></span>
                {{ tag }}
              </p>
            </div>
            <hr class="my-4 text-gray-300" />
            <div class="px-1 flex justify-between items-center">
              <span class="text-xs">فقط کالاهای موجود</span>
              <label class="switch">
                <input type="checkbox" v-model="productStore.isChecked" />
                <span class="slider round"></span>
              </label>
            </div>
            <hr class="my-4 text-gray-300" />
            <div class="flex justify-center items-center flex-col w-full">
              <p class="text-lg text-gray-600 mt-2 font-semibold">فیلتر قیمت</p>
              <div class="flex justify-between items-center flex-col mt-5 w-full p-1">
                <div class="flex justify-between items-center w-full">
                  <p class="text-sm font-semibold text-right text-gray-700">حداقل قیمت:</p>
                  <p class="text-gray-700">
                    {{ toPersianNumber.toPersianNumber(productStore.minPrice)
                    }}<span class="text-sm mr-1">تومان</span>
                  </p>
                </div>
                <input
                  class="w-full mt-2"
                  type="range"
                  v-model="productStore.minPrice"
                  min="0"
                  max="10000000"
                  step="10"
                />
              </div>
              <div class="flex justify-between items-center flex-col mt-5 w-full p-1">
                <div class="flex justify-between items-center w-full">
                  <p class="text-sm font-semibold text-right text-gray-700">حداکثر قیمت:</p>
                  <p class="text-gray-700">
                    {{ toPersianNumber.toPersianNumber(productStore.maxPrice)
                    }}<span class="text-sm mr-1">تومان</span>
                  </p>
                </div>
                <input
                  class="w-full mt-2"
                  type="range"
                  v-model="productStore.maxPrice"
                  min="0"
                  max="10000000"
                  step="10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-sec w-full">
      <div
        class="filter-price p-3 w-full border-1 rounded-xl border-gray-300"
        style="background: linear-gradient(300.67deg, #f6f8fb -150%, #ebedf0 100.46%)"
      >
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-bold text-gray-700 p-2 text-sm sm:text-base">مرتب‌سازی :</span>
          <button
            @click="sortStore.setSort('asc')"
            :class="[
              'p-2 rounded-lg cursor-pointer text-gray-500 text-sm sm:text-base',
              sortStore.sortby === 'asc' ? 'bg-white' : '',
            ]"
          >
            ارزان‌ترین
          </button>
          <button
            @click="sortStore.setSort('desc')"
            :class="[
              'p-2 rounded-lg cursor-pointer text-gray-500 text-sm sm:text-base',
              sortStore.sortby === 'desc' ? 'bg-white' : '',
            ]"
          >
            گران‌ترین
          </button>
        </div>
      </div>
      <div class="products">
        <Products />
      </div>
    </section>
  </main>
</template>

<style scoped></style>