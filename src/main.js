import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createHead } from "unhead"

import './assets/main.css'

const head = createHead()


const app = createApp(App)

app.use(router, head)

app.mount('#app')
