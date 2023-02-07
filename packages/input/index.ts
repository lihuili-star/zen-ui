import Input from './src/input.vue'
import { App } from 'vue'

Input.name = 'zen-input'

Input.install = (app: App): void => {
  // 注册组件
  app.component(Input.name, Input)
}

export default Input
