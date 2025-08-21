<script setup>
import { useProductStore } from '@/stores/productStore'
import { useToPersianStore } from '@/stores/topersiannumberStore'
import Counter from './Counter.vue'

const productStore = useProductStore()
const toPersianNumber = useToPersianStore()
</script>

<template>
  <div class="container mx-auto px-15 my-15">
    <div class="flex flex-wrap gap-6">
      <section
        v-for="product in productStore.cartItems"
        :key="product.id"
        class="w-[230px] bg-white p-4 rounded-lg shadow-md flex flex-col"
      >
        <div class="w-full h-60 mb-4">
          <img :src="product.image" alt="" class="w-full h-full object-fill rounded-lg" />
        </div>
        <div class="flex flex-col justify-between flex-1">
          <p class="font-semibold text-lg text-gray-600">{{ product.title }}</p>
          <p class="text-red-500 mt-5 flex justify-right gap-1">
            <span class="text-gray-500"> قیمت:</span>
            {{ toPersianNumber.toPersianNumber(product.price) }}
            <span class="inline mx-1"
              ><svg style="width: 18px; height: 18px; fill: var(--color-icon-high-emphasis)">
                <use xlink:href="#toman">
                  <symbol id="toman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path
                      fill-rule="evenodd"
                      d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                      clip-rule="evenodd"
                    ></path>
                  </symbol>
                </use></svg
            ></span>
          </p>
          <p class="text-gray-500 mt-1">
            موجودی: {{ toPersianNumber.toPersianNumber(product.stock) }}
          </p>
          <Counter v-model="product.quantity" :product="product" :min="1" />
        </div>
      </section>
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
