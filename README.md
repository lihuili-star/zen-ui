
#### 安装依赖

如果您没有安装 pnpm，需要先按照 pnpm

```shell
npm install -g pnpm
```

安装依赖：

```shell
pnpm i
```

#### 本地开发

在 example 中开发组件，使用命令：

```shell
pnpm run dev:dev
```

访问地址为 http://localhost:3000/

在组件库文档中开发组件，使用命令：

```shell
pnpm run docs:dev
```

访问地址为 http://localhost:3100/

#### 创建新组件

```shell
pnpm run gen:component
```
按照提示输入组件名称、组件中文名称、组件类型（.tsx 或 .vue）

#### 构建文档
```shell
pnpm run build:docs
```
打包构建后的文件位于 _docs/.vitepress/dist_ 目录

#### 构建 example
```shell
pnpm run build:dev
```
打包构建后的文件位于 _dist_ 目录

#### 发布组件库

组件库打包：

```shell
pnpm run build:lib
```

在发布 npm 前可以在本地私服进行测试。
启动本地私服：
```shell
pnpm run start:verdaccio
```
启动成功后在浏览器中访问 http://localhost:4873/

如果初次使用，需要创建用户。

发布组件库到本地私服中：
```shell
pnpm run pub:local
```


## 组件库命令说明

组件库的命令入口均在根目录的 _package.json_ 中的 _scripts_ 中。由于采用了 monorepo 的方式，大多命令的实现都在各自的模块中。

所有命令如下：

```
- dev:dev
- dev:uat
- dev:prod
- build:dev
- build:uat
- build:prod
- preview:example
- build:lib
- docs:dev
- docs:build
- docs:preview
- gen:component
```

#### pnpm run dev:dev

本地开发 example，使用 dev 环境配置，访问地址为 http://localhost:3000/

#### pnpm run dev:uat

本地开发 example，使用 uat 环境配置，访问地址为 http://localhost:3000/

#### pnpm run dev:prod

本地开发 example，使用 prod 环境配置，访问地址为 http://localhost:3000/

#### pnpm run build:dev

打包 dev 环境 example，打包生成的文件位于项目根目录的 _dist_ 目录

#### pnpm run build:uat

打包 uat 环境 example，打包生成的文件位于项目根目录的 _dist_ 目录

#### pnpm run build:prod

打包 prod 环境 example，打包生成的文件位于项目根目录的 _dist_ 目录

#### pnpm run preview:example

预览打包后的 example，访问地址为：http://localhost:4173/

#### pnpm run build:lib

打包组件库，打包生成的文件位于项目根目录的 _lib_ 目录

#### pnpm run docs:dev

本地开发组件库文档，访问地址为：http://localhost:3100/

#### pnpm run docs:build

组件库文档打包，打包生成的文件位于项目根目录下的 _docs/.vitepress/dist_ 目录

#### pnpm run docs:preview

预览打包后的组件库文档，访问地址为：http://localhost:4173/

#### pnpm run gen:component

快速创建新组件。依次输入组件名、组件描述（中文名称）、组件类型（tsx \ vue）即可自动生成组件并完成配置。


