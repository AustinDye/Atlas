import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { ScrollAnimate } from './utils/ScrollAnimate'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)


root.directive('scrollanimation', ScrollAnimate)
root
  .use(router)
  .mount('#app')
