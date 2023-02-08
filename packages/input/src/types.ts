import { ExtractPropTypes } from 'vue'

const inputSize = ['small', 'normal', 'large']
const inputType = ['text', 'password']
const tOf = [true, false]
export const inputProps = {
  // 尺寸
  size: {
    type: String,
    values: inputSize,
    default: 'normal'
  },
  // 类型
  type: {
    type: String,
    values: inputType,
    default: 'text'
  },
  // 标题
  label: {
    type: String,
    default: ''
  },
  // placeholder
  placeholder: {
    type: String,
    required: false
  },
  // 禁用
  disabled: {
    type: Boolean,
    values: tOf,
    default: false
  },
  // v-model
  modelValue: {
    type: String
  },
  // 清除clearable
  clearable: {
    type: Boolean,
    values: tOf,
    default: false
  },
  // 查看密码-showPassword
  showPassword: {
    type: Boolean,
    values: tOf,
    default: false
  }

}

export type InputProps = ExtractPropTypes<typeof inputProps>
