<template>
  <zen-input v-model="psw"
  type="password" :label="label" placeholder="请输入密码" showPassword></zen-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const label = ref('密码')
const psw = ref()
</script>

<style scoped lang="scss">

</style>
