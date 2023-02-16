import Rate from './src/rate.vue'
import { App } from 'vue'

Rate.name = 'zen-rate'

Rate.install = (app: App): void => {
  // 注册组件
  app.component(Rate.name, Rate)
}

export default Rate
