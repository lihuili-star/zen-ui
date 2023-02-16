<template>
  <div>
  <!-- 图例测试：
  <i class="iconfont icon-fullstar"></i>
  <i class="iconfont icon-star"></i>
  <i class="iconfont icon-happystar"></i> -->
   <div :value='value' :class="['zen-rate',`zen-rate_${size}`,`zen-rate_disabled_${disabled}`]">
      <ul class="Rating-list" v-for="(item, index) in 5"  :key="index"
        @mouseenter="disabled ? '' : num=index+1"
        @mouseleave="disabled ? '' : num=''"
        @click="disabled ? '' : setNum(index)">
        <li>
          <i :class="index < num?'iconfont icon-happystar':'iconfont icon-star'"></i>
        </li>
        <li v-if="index== 4 && withText==true" class="numText">{{num}}星</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup name="zen-rate">
import { defineProps, ref } from 'vue'
import { rateProps } from './types'
defineProps(rateProps)
const emits:Object = defineEmits(['update:starNum'])
const num = ref(0)
// const withIcon = ref(false)
// 动态显示评分(鼠标)
const setNum:Function = (i) => {
  num.value = i + 1
  emits('update:starNum', num)
}
</script>

<style scoped lang="scss">
.zen-rate {
}
ul{
  list-style:none;
}
li{
  float: left;
  line-height: 3px;
}
.numText{
  margin-left: 3px;
}

// 禁用样式
.zen-rate_disabled_true{
  color: #999;
  cursor: no-drop;
}
// 小尺寸样式
.zen-rate_small{
  i{
    font-size: 5px;
    line-height: 5px;
  }
  li{
     line-height: 5px;
  }
}
// 中尺寸样式
.zen-rate_normal{
   i{
    font-size: 16px;
    line-height: 16px;
  }
  li{
     line-height: 16px;
  }
}
// 大尺寸样式
.zen-rate_large{
  i{
    font-size: 26px;
    line-height: 26px;
  }
  li{
     line-height: 26px;
  }
}
// 图标样式
@font-face {
  font-family: "iconfont"; /* Project id 3886520 */
  src: url('//at.alicdn.com/t/c/font_3886520_0qax0nhk5ocl.woff2?t=1675858644983') format('woff2'),
       url('//at.alicdn.com/t/c/font_3886520_0qax0nhk5ocl.woff?t=1675858644983') format('woff'),
       url('//at.alicdn.com/t/c/font_3886520_0qax0nhk5ocl.ttf?t=1675858644983') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.icon-star:before {
    content: "\e64a";
    color: #999;
  }

  &.icon-happystar:before {
    content: "\e616";
    color: orange;
  }

  &.icon-fullstar:before {
    content: "\e653";
    color: orange;
  }
}

</style>
