<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <zen-foo :msg="msg" style="margin-bottom:100px"></zen-foo>
    <zen-input :label="label" size="small"   style="margin-bottom:20px" ></zen-input>
    <zen-input :label="label" placeholder="请输入用户名" style="margin-bottom:20px" clearable>
      <template #button>
      </template>
    </zen-input>
    <zen-input :label="label" size="large" type="password" showPassword  v-model="str" clearable></zen-input>
    {{'str:'+ str }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义变量
const msg = ref('hello world')
const label = ref('用户名')
const str = ref('')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
