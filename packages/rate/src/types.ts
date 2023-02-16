
import { ExtractPropTypes } from 'vue'
const rateSize = ['small', 'normal', 'large']
const tOf = [true, false]

export const rateProps = {
  // 尺寸
  size: {
    type: String,
    values: rateSize,
    default: 'normal'
  },
  // 带文本
  withText: {
    type: Boolean,
    values: tOf,
    default: false
  },
  // 自定义icon
  withIcon: {
    type: Boolean,
    values: tOf,
    default: false
  },
  // 禁用
  disabled: {
    type: Boolean,
    values: tOf,
    default: false
  },
  // 评分分数
  num: {
    type: Number
  }

} as const

export type RateProps = ExtractPropTypes<typeof rateProps>
