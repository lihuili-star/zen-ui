<template>
  <zen-input :label="label" placeholder="请输入用户名" size="small"></zen-input>
  <zen-input :label="label" placeholder="请输入用户名"></zen-input>
  <zen-input :label="label" placeholder="请输入用户名" size="large"></zen-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const label = ref('用户名')
</script>

<style scoped lang="scss">
*{
  margin-bottom: 20px;
}
</style>
