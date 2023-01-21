import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DemoUiLib from '@zen-ui/zen-ui'

const env = import.meta.env
console.log(env)

const app = createApp(App)
app.use(DemoUiLib)
app.mount('#app')
