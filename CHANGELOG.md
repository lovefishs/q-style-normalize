Changes to q-style-normalize

### 2.1.0 (2020-04-10)

* 调整 html 基准字号为 `16px`
* 调整默认字号为 `14px`

### 2.0.1 (2020-03-16)

* 调整工具依赖类型

### 2.0.0 (2020-03-15)

* 重构样式，包含但不限于删除 IE 10 以下的兼容代码
* 升级 PostCSS 及相关插件
* 新增 LICENSE.md 文件
* 更新 gitignore 配置
* 迁移仓库到 github
* 压缩测试图片

### 1.7.0 (2016-11-22)

* DEL: 删除 v1.6.0 版本所做的优化(对于此类代码不应该包含进来,以移入 `q-style-atomic` 包)

### 1.6.0 (2016-11-21)

* 优化: 页面出现滚动条时元素不跳动

### 1.5.0 (2016-11-21)

* 更新字体设置方案，MacOS 优先

### 1.4.0 (2016-11-09)

* 更新整体的字体设置方案

### 1.3.0 (2016-09-21)

* 新增 `postcss-cssnext` 开发依赖包，替换 `autoprefixer` 开发依赖包，减少开发依赖

### 1.2.1 (2016-09-20)

* 修复更新元素 `disabled` 状态样式

### 1.2.0 (2016-09-20)

* 更新默认字体为 `'Microsoft YaHei', tahoma, arial,'Hiragino Sans GB', sans-serif`
* 更新 `line-height` 值为 `1.5`
* 更新 `.ul` `.ol` 嵌套 `list-style-type` 显示值
* 清除 `select` 元素的 `border` 设置
* 更新 `[type='search']` 元素设置
* 清除 `[type='checkbox']` `[type='radio']` 元素的 `box-sizing` 设置
* 更新 `fieldset` `legend` 元素样式
* 新增 test 页面

### 1.1.0 (2016-09-19)

* 固化 [cssnano](https://github.com/ben-eb/cssnano) 版本为 3.7.4
* 删除多余的注释信息
* 使用嵌套方式重写样式
* 对伪元素使用双冒号 `::` 标准写法，便于区分伪元素与伪类
* 新增 `dev` `build` 脚本，对应相应的 `development` `production` 配置
* 删除无用的开发依赖包 `postcss-import` `postcss-simple-vars` `postcss-extend` `postcss-mixins`

### 1.0.0 (2016-09-18)

* 推送到 [npm](https://www.npmjs.com)
