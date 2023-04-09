import Vue from 'vue'
import { createPinia, defineStore } from 'pinia'
import Test from '@/store/test/index'
const pinia = {
  install (app: any) {
    app.use(createPinia())
  }
}

Vue.use(pinia)

export const testStore = defineStore('test', Test)
