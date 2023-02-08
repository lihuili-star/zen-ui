<template>
  <div :class="['zen-input_wrapper', `zen-input_wrapper_${size}`,`zen-input_disabled_${disabled}`]">
    <input class="zen-input_inner" required ref="input"
    :value="modelValue"   @input="$emit('update:modelValue',$event.target.value)"
    :type="type" :placeholder="placeholder" :disabled="disabled"/>
    <span v-if="label" class="zen-input_label">{{ label }}</span>
    <img src="./close.png" class="clearable_icon" @click="clearInput()" v-if="clearable&&modelValue"/>
    <img src="./view_off.png" class="showpsw_icon" v-if="!clearable&&showPassword&&!isShow" @click="showPsw()"/>
    <img src="./view.png" class="showpsw_icon" v-if="!clearable&&showPassword&&isShow" @click="showPsw()"/>
    <slot name="suffix"></slot>
 </div>
</template>

<script lang="ts" setup name="zen-input">
import { defineProps, onMounted, ref } from 'vue'
import { inputProps } from './types'
const props:Object = defineProps(inputProps)
const emits:Object = defineEmits(['update:modelValue'])
const input:Object = ref()
const isShow:Boolean = ref(false)
// 清空输入
const clearInput:Function = () => {
  emits('update:modelValue', '')
  input.value.focus()
}
// 显示密码
const showPsw:Function = () => {
  isShow.value = !isShow.value
  switch (input.value.type) {
    case 'text':
      input.value.type = 'password'
      break
    case 'password':
      input.value.type = 'text'
      break
  }
}
// 初始化
onMounted(() => {
  if (props.label !== '') {
    input.value.classList.add('hasLabel')
  }
})
console.table(props)
</script>

<style scoped lang="scss">
//变量
$wrapper-color_noFocus:rgba($color: #000000, $alpha: 0.6);
$wrapper-color_Focus:rgb(10, 10, 10);
$input-color_Disabled:rgb(#000,0.1);
$label-color_Disabled:rgb(#000,0.3);

*{
  padding: 0px;
  margin: 0px;
  line-height: initial;
}
.hasLabel::placeholder{
    visibility: hidden;
}
//zen-input_wrapper公共样式
.zen-input_wrapper{
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  .zen-input_inner{
    width: 100%;
    border: 2px solid $wrapper-color_noFocus;
    border-radius: 4px;
    outline: none;
    color:black;
    transition: .3s;
    &:valid ,
    &:focus{
      border: 2px solid $wrapper-color_Focus;
      transition: .3s;
      ~ .zen-input_label{
        color: $wrapper-color_Focus;
        transform: translateX(10px) translateY(-7px);
        transition: .3s;
        background-color: white;
        top:-1px
      }
      &::placeholder{
        visibility:visible;
      }
    }
    &{

    }
  }
  //输入框标题
    .zen-input_label{
      position: absolute;
      left: 0;
      top:0;
      pointer-events: none;
      color: $wrapper-color_noFocus;
      text-transform: uppercase;
      transition: .3s;
      font-weight: 700;
    }
    //clearable图标
    .clearable_icon,.showpsw_icon{
      position:absolute;
      height: 50%;
      right: 0;
      padding-right: 10px;
      &:hover{
        cursor: pointer;
      }
    }
}
//小尺寸样式
.zen-input_wrapper_small{
  .zen-input_inner{
    padding: 5px 10px;
    font-size: 0.7em;
    &:valid ,
    &:focus{
      ~ .zen-input_label{
      font-size: 0.1em;
      padding: 0 5px ;
      // border-left: 1.3px solid $wrapper-color_Focus;
      // border-right: 1.3px solid $wrapper-color_Focus;
      }
    }
  }
  //输入框标题
  .zen-input_label{
    padding:5px 10px;
    font-size: 0.7em;
  }
}
//中尺寸样式
.zen-input_wrapper_normal{
  .zen-input_inner{
    padding: 10px;
    font-size: 1em;
    &:valid ,
    &:focus{
      ~ .zen-input_label{
      font-size: 0.5em;
      padding: 0 5px;
      // border-left: 1.8px solid $wrapper-color_Focus;
      // border-right: 1.8px solid $wrapper-color_Focus;
      }
    }
  }
  .zen-input_label{
    padding: 10px;
    font-size: 1em;
  }
}
//大尺寸样式
.zen-input_wrapper_large{
  .zen-input_inner{
    padding: 10px;
    font-size: 1.5em;
    &:valid ,
    &:focus{
      ~ .zen-input_label{
      font-size: 1em;
      padding: 0 5px;
      // border-left: 2px solid $wrapper-color_Focus;
      // border-right: 2px solid $wrapper-color_Focus;
      }
    }
  }
  .zen-input_label{
    padding:10px;
    font-size:  1.5em;
  }
}
//禁用样式
.zen-input_disabled_true{

  .zen-input_inner{
    border-color: rgb(#000,0.2)!important;
    background-color: $input-color_Disabled;
    cursor: no-drop;
  }
  .zen-input_label{
    color: $label-color_Disabled
  }
}
</style>
