<script setup>
defineOptions({
  name: 'Header',
})
</script>

<template>
  <header class="container mx-auto px-15">
    <div class="flex justify-between items-center shadow-xs px-4 pt-3 rounded-b-xl bg-white">
      <div class="flex justify-center items-center">
        <div class="w-[180px] h-[100px]">
          <img
            class="object-cover w-full h-full"
            src="/public/images/history-book-education-logo-design-concept-history-book-education-logo-design-concept-tree-book-creative-vector-279321333.webp"
            alt=""
          />
        </div>
        <input
          class="w-[500px] rounded-md p-3 outline-0 text-gray-700 text-sm"
          style="background: linear-gradient(333.67deg, #f6f8fb 68%, #ebedf0 110.46%)"
          type="text"
          placeholder="محصول خود را جستجو کنید..."
        />
      </div>
      <div
        class="flex justify-center items-center gap-1 py-2 px-2 rounded-lg"
        style="background: linear-gradient(333.67deg, #f6f8fb 68%, #ebedf0 110.46%)"
      >
        <a href=""
          ><svg
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
            /></svg
        ></a>
        <p>سبد خرید</p>
        <span class="py-1 px-3 h-fit bg-white rounded-full mr-3 leading-6">۰</span>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
