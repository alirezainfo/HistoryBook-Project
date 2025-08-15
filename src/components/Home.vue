<script setup>
defineOptions({
  name: 'Home',
})
</script>

<template>
  <main class="container mx-auto px-15 mt-10 flex justify-start items-start gap-4">
    <section class="filter-sec">
      <div class="w-[250px] bg-white p-4 rounded-xl flex flex-col border-1 border-gray-300">
        <input
          class="bg-gray-100 text-xs p-3 rounded-sm outline-0 mt-5 w-full"
          type="text"
          placeholder="جستجو براساس تگ"
        />
        <hr class="my-4 text-gray-300" />
        <div class="px-1 flex justify-between items-center">
          <span class="text-xs">فقط کالاهای موجود</span>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
        </div>
        <hr class="my-4 text-gray-300" />
        <div class="flex justify-center items-center flex-col">
          <p class="text-sm font-semibold">فیلتر قیمت</p>
          <div class="flex justify-between items-center flex-row mt-5 w-full">
            <span class="text-sm">از</span>
            <input
              class="bg-gray-100 text-xs p-2 rounded-sm outline-0 w-7/8"
              type="text"
              placeholder="0"
            />
          </div>
          <div class="mt-5 flex justify-center items-center flex-col w-full">
            <div class="flex justify-evenly items-center flex-row w-full gap-2">
              <span class="text-sm">تا</span>
              <input
                class="bg-gray-100 text-xs p-2 rounded-sm outline-0 w-full"
                type="text"
                placeholder="0"
              />
              <span class="text-sm">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-sec w-full">
      <div
        class="filter-price p-3 w-full border-1 rounded-xl border-gray-300"
        style="background: linear-gradient(333.67deg, #f6f8fb 68%, #ebedf0 110.46%)"
      >
        <div class="flex gap-2">
          <span class="font-bold text-gray-700">مرتب‌سازی :</span>
          <span class="text-gray-600">ارزان‌ترین</span>
          <span class="text-gray-600">گران‌ترین</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
