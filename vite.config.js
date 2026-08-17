import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

<<<<<<< HEAD
export default defineConfig({
  base: '/HistoryBook-Project/',

  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],

=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
>>>>>>> f091b63592f1025a7ffa36dbac656c512d6e9d88
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> f091b63592f1025a7ffa36dbac656c512d6e9d88
