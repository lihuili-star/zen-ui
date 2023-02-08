
# Input An Input Box

## 基本使用

<preview path="../demos/input/input-1.vue" title="基本使用" description="<zen-input>可以指定其type属性，来选择是普通文本输入框text还是密码框password"></preview>

## label与placeholder
<preview path="../demos/input/input-2.vue" title="label与placeholder的使用" description="可以通过动态指定label作为当前输入框的标题，在未启用情况下label会作为提示显示于输入框中，在输入框被选中或者是有内容时label会上升到顶部以提示用户。同时当label上升到顶部时就会展现出placeholder中的提示文本。"></preview>


## 禁用-disabled
<preview path="../demos/input/input-3.vue" title="label与placeholder的使用" description="我们可以通过disabled这个属性，来决定哪些输入框暂时不可被使用"></preview>

## 密码可视-showPassword
<preview path="../demos/input/input-4.vue" title="showPassword的使用" description="对于type='password'的输入框，我们可以为其添加一个showPassword的Attribute以实现密码可视化的功能"></preview>

## 框体大小-size
<preview path="../demos/input/input-5.vue" title="size的使用" description="输入框预设中一共有三种不同的样式大小[small、normal(默认)、large],在使用时我们可以按需选择"></preview>
## 组件 API
### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
| size | 输入框尺寸 | string | small、normal、large | normal |
| label | 输入框标题 | string |  |  |
| type | 输入框类型 | string | text、password | text |
| placeholder | 输入框提示语 | string |  |  |
| disabled | 是否禁用 | boolean | true、false | false |
| clearable | 一键清除 | boolean | true、false | false |
| showPassword | 密码可视 | boolean | true、false | false |
### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  button  | 用于防止紧随输入框的按钮  | ----  |
|  |  |  |
