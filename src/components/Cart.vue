<script setup>
import { useProductStore } from '@/stores/productStore'
import { useToPersianStore } from '@/stores/topersiannumberStore'
import Counter from './Counter.vue'
import { computed } from 'vue'

const productStore = useProductStore()
const toPersianNumber = useToPersianStore()

const totalPriceForProduct = computed(() =>
  productStore.cartItems.reduce(
    (sum, product) => (sum += product.quantity * product.product.price),
    0,
  ),
)
</script>

<template>
  <div class="container mx-auto px-15 my-10">
    <div
      class="flex justify-center gap-2 w-full items-end px-10 py-5 bg-white border border-white rounded-t-xl"
    >
      <p class="font-bold text-gray-600 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-basket-icon lucide-shopping-basket text-red-500"
        >
          <path d="m15 11-1 9" />
          <path d="m19 11-4-7" />
          <path d="M2 11h20" />
          <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
          <path d="M4.5 15.5h15" />
          <path d="m5 11 4-7" />
          <path d="m9 11 1 9" />
        </svg>
      </p>
      <p class="font-bold text-gray-600 text-xl">سبد خرید</p>
    </div>
    <hr class="text-gray-300" />

    <div class="flex flex-wrap gap-6 bg-white pt-5 px-5 justify-center">
      <section
        v-for="product in productStore.cartItems"
        :key="product.product.id"
        class="w-[230px] bg-white p-4 rounded-lg shadow-xl flex flex-col"
      >
        <div class="w-full h-60 mb-4">
          <img :src="product.product.image" alt="" class="w-80 h-full object-fill rounded-lg" />
        </div>
        <div class="flex flex-col justify-between flex-1">
          <p class="font-semibold text-lg text-gray-600">{{ product.product.title }}</p>
          <p class="text-black-500 mt-5 flex justify-right gap-1">
            <span class="text-gray-500"> قیمت:</span>
            {{ toPersianNumber.toPersianNumber(product.product.price) }}
            <span class="text-gray-600">تومان</span>
          </p>
          <p class="text-gray-500 mt-1">
            موجودی: {{ toPersianNumber.toPersianNumber(product.product.stock) }}
          </p>
          <p class="text-gray-500 mt-1">
            قیمت کل:
            <span class="text-red-600">{{
              toPersianNumber.toPersianNumber(product.quantity * product.product.price)
            }}</span>
          </p>
          <Counter v-model="product.quantity" :product="product.product" :min="1" />
        </div>
      </section>
    </div>

    <div class="flex justify-between items-center bg-white py-10 px-10">
      <div class="flex justify-center gap-2 items-center">
        <p class="font-bold text-lg text-gray-800">جمع کل:</p>
        <span class="font-bold text-xl text-red-600">{{
          toPersianNumber.toPersianNumber(totalPriceForProduct)
        }}</span
        ><span class="text-gray-700 font-semibold">تومان</span>
      </div>
      <button
        class="border bg-blue-600 text-white px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-white"
      >
        پرداخت
      </button>
    </div>
  </div>
</template>

<style scoped>
/* استایل پایه */
.quantity-selector {
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* استایل دکمه‌ها */
.qty-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.qty-btn svg {
  width: 14px;
  height: 14px;
  stroke: #495057;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all 0.3s ease;
}

.qty-btn.minus {
  border-radius: 0 4px 4px 0;
  box-shadow: inset 2px 0 4px rgba(0, 0, 0, 0.05);
}

.qty-btn.plus {
  border-radius: 4px 0 0 4px;
  box-shadow: inset -2px 0 4px rgba(0, 0, 0, 0.05);
}

/* افکت‌های تعاملی */
.qty-btn:not(:disabled):hover {
  background: linear-gradient(to bottom, #e9ecef, #dee2e6);
}

.qty-btn:not(:disabled):active {
  transform: scale(0.95);
}

.qty-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(105, 90, 223, 0.3);
}

.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* استایل قسمت ورودی */
.qty-input-container {
  position: relative;
  height: 24px;
  width: 44px;
}

.qty-input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  border: none !important;
  border-bottom: 1px solid #e9ecef;
  background: #fff;
  padding: 0;
  -moz-appearance: textfield;
}

.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.qty-input:focus {
  outline: none;
}

/* خط زیرین انیمیشنی */
.input-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #695adf;
  transition: all 0.3s ease;
}

.qty-input:focus ~ .input-underline {
  width: 40px;
}

/* انیمیشن هنگام تغییر مقدار */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.qty-input.changed {
  animation: pulse 0.3s ease;
}
</style>
