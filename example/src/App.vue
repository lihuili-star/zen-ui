<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <zen-foo :msg="msg"></zen-foo>
    默认样式：<zen-rate :num=num></zen-rate><br>
    携带文本：<zen-rate :num=num withText></zen-rate><br>
    携带尺寸：
    <zen-rate :num=num size="large" >大</zen-rate><br>
    <zen-rate :num=num >中</zen-rate><br>
    <zen-rate :num=num size="small">小</zen-rate><br>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
