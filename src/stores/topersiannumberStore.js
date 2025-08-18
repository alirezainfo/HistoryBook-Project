import { defineStore } from 'pinia'

export const useToPersianStore = defineStore('toPersianNumber', () => {
  function toPersianNumber(value) {
    const withCommas = Number(value).toLocaleString('fa-IR')
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return withCommas.toString().replace(/\d/g, (d) => persianDigits[d])
  }

  return { toPersianNumber }
})
