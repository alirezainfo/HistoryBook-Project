<script setup>
defineOptions({
  name: 'Product',
})
</script>

<template>
  <div class="bg-white w-[200px] h-auto rounded-xl p-2">
    <div class="img-wrapper h-3/5">
      <img class="w-full h-full rounded-xl object-fit" src="/public/images/book.jpg" alt="" />
    </div>
    <p class="product-name font-semibold mt-2 text-gray-600">شب‌های روشن</p>
    <div class="product-tags flex justify-center items-start gap-1.5 mt-3 flex-wrap">
      <span class="p-2 bg-gray-100 rounded-lg text-gray-500 text-sm">کتاب</span>
      <span class="p-2 bg-gray-100 rounded-lg text-gray-500 text-sm">رمان</span>
      <span class="p-2 bg-gray-100 rounded-lg text-gray-500 text-sm">ادبیات روس</span>
    </div>
    <div class="flex justify-between item-center flex-row mt-5">
      <div class="flex justify-center items-center gap-0.5 bg-red-600 p-1 rounded-2xl">
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
        <span class="stock text-xs text-white">۴</span>
      </div>
      <p class="product-price text-left font-bold text-gray-600">۱۴۰,۰۰۰ تومان</p>
    </div>
    <button
      class="text-sm border-1 w-full mt-3 p-2 rounded-sm text-blue-700 hover:bg-blue-700 hover:text-white"
    >
      افزودن به سبد خرید
    </button>
  </div>
</template>

<style scoped></style>
