<template>
  <zen-input :label="label" placeholder="请输入用户名"></zen-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const label = ref('用户名')
</script>

<style scoped lang="scss">

</style>
