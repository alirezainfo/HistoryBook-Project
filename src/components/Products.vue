<script setup>
import Product from './Product.vue'

defineOptions({
  name: 'Products',
})
</script>

<template>
  <section class="w-full mt-5 flex justify-right items-center flex-wrap gap-4">
    <product />
  </section>
</template>

<style scoped></style>
