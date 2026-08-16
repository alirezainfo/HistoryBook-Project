<script setup>
import Product from './Product.vue'

defineOptions({
  name: 'Products',
})
</script>

<template>
  <section class="w-full mt-5 flex justify-center items-center flex-wrap gap-5 mb-5">
    <product />
  </section>
</template>

<style scoped></style>
