# Changes to q-style-normalize

### HEAD

* bugfix。

### 1.5.0 (2016-11-21)

* 更新字体设置方案，MacOS 优先。

### 1.4.0 (2016-11-09)

* 更新整体的字体设置方案。

### 1.3.0 (2016-09-21)

* 新增 `postcss-cssnext` 开发依赖包，替换 `autoprefixer` 开发依赖包，减少开发依赖。

### 1.2.1 (2016-09-20)

* 修复更新元素 `disabled` 状态样式。

### 1.2.0 (2016-09-20)

* 更新默认字体为 `'Microsoft YaHei', tahoma, arial,'Hiragino Sans GB', sans-serif` 。
* 更新 `line-height` 值为 `1.5` 。
* 更新 `.ul` `.ol` 嵌套 `list-style-type` 显示值。
* 清除 `select` 元素的 `border` 设置。
* 更新 `[type='search']` 元素设置。
* 清除 `[type='checkbox']` `[type='radio']` 元素的 `box-sizing` 设置。
* 更新 `fieldset` `legend` 元素样式。
* 新增 test 页面。

### 1.1.0 (2016-09-19)

* 固化 [cssnano](https://github.com/ben-eb/cssnano) 版本为 3.7.4。
* 删除多余的注释信息。
* 使用嵌套方式重写样式。
* 对伪元素使用双冒号 `::` 标准写法，便于区分伪元素与伪类。
* 新增 `dev` `build` 脚本，对应相应的 `development` `production` 配置。
* 删除无用的开发依赖包 `postcss-import` `postcss-simple-vars` `postcss-extend` `postcss-mixins` 。

### 1.0.0 (2016-09-18)

* 推送到 [npm](https://www.npmjs.com)。
