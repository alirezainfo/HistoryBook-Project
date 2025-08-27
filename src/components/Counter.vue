<script setup>
import { useProductStore } from '@/stores/productStore'
import { defineProps } from 'vue'
import { defineEmits } from 'vue'
import { useToPersianStore } from '@/stores/topersiannumberStore'

const toPersianNumber = useToPersianStore()
const productStore = useProductStore()

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  min: { type: Number, default: 1 },
  // min: {
  //   type: Number,
  //   default: 1,
  // },
  // max: {
  //   type: Number,
  //   default: Infinity,
  // },
})

const emit = defineEmits(['update:modelValue'])

function Increment() {
  if (props.product.stock > 0) {
    emit('update:modelValue', props.modelValue + 1)
    props.product.stock -= 1
  }
}

function Decrement() {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
    props.product.stock += 1
  }
}

function Deleted() {
  const productDeleteIndex = productStore.cartItems.findIndex(
    (p) => p.product.id === props.product.id,
  )
  const productDelete = productStore.cartItems.find((p) => p.product.id === props.product.id)
  props.product.isAdded = false
  productStore.cartItems.splice(productDeleteIndex, 1)
  productStore.cartStock -= 1
  props.product.stock += productDelete.quantity
  productStore.showToast('محصول از سبد خرید حذف شد.', 'info')
}
</script>

<template>
  <div class="flex w-full px-2 justify-between mt-4">
    <div
      class="ml-1 flex items-center border-[1px] border-blue-200 rounded-sm bg-gray-100 px-3 py-1"
    >
      <button
        @click="Increment"
        :disabled="props.product.stock <= 0"
        class="minus ml-1 cursor-pointer rounded-full p-1 hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 text-lime-600"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <span class="cursor-default px-2 text-lg w-6">{{
        toPersianNumber.toPersianNumber(props.modelValue)
      }}</span>

      <button
        @click="Decrement"
        :disabled="props.modelValue <= props.min"
        class="mr-1 cursor-pointer rounded-full p-1 hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 text-red-600"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
    </div>
    <Button @click="Deleted">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6 text-red-600 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </Button>
  </div>
</template>
