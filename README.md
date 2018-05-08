# market

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9000
npm run dev

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 静态资源
│   ├── components             // 页面组件
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口js
├── static                     // 不打包资源
├── .babelrc                   // babel-loader 配置
├── index.html                 // html模板
└── package.json               // package.json


## 开发说明
### package.json(http://javascript.ruanyifeng.com/nodejs/packagejson.html)
1.1）package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。npm install命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
1.2）package.json文件可以手工编写，也可以使用npm init命令自动生成。
1.3）根据package.json文件下载模块
     方式一：npm install
     方式二(推荐，速度比较快)：全局安装淘宝镜像后(npm install -g cnpm --registry=https://registry.npm.taobao.org)
     cnpm i

### 网上文档(vue、webpack)
1）vue：https://cn.vuejs.org/v2/guide/index.html
2）vue-router：
https://router.vuejs.org/zh-cn/essentials/getting-started.html
通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
this.$router.push、this.$router.replace、this.$router.go、this.$route.query
3）webpack：
https://doc.webpack-china.org/configuration/dev-server/
https://doc.webpack-china.org/configuration/resolve/
4）babel：
https://babeljs.cn/docs/setup/
Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。(低版本浏览器不支持es6)

### 尺寸单位使用rem
将UI图上的px尺寸单位换算成rem

### 其它
1）CommonsChunkPlugin（https://doc.webpack-china.org/plugins/commons-chunk-plugin/）
通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
2）从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。
3）webpack
3.1）loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
3.2）loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。
由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。
3.3）webpack 的配置文件，是导出一个对象的 JavaScript 文件。此对象，由 webpack 根据对象定义的属性进行解析。webpack 配置是标准的 Node.js CommonJS 模块。
4）webpack模块解析Resolve：用于帮助找到模块的绝对路径
import router from './router' => import router from './router/index'
https://doc.webpack-china.org/configuration/resolve/（alias、extensions、mainfiles等）
5）ExtractTextWebpackPlugin
https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/
提取模块中的内容（如css）到独立分离的文件
例如可以将项目中引用的样式移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。
6）--config
https://doc.webpack-china.org/api/cli/
配置文件默认为 webpack.config.js，如果你想使用其它配置文件，可以加入--config参数。
webpack --config example.config.js

7）生产环境构建
https://doc.webpack-china.org/guides/production
https://cn.vuejs.org/v2/guide/deployment.html
7.1）开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载或热模块替换能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。（webpack.dev.conf.js、webpack.prod.conf.js）
虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定的配置中重复代码。（webpack.base.conf.js）
7.2）UglifyJSPlugin 是代码压缩方面比较好的选择
开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
当使用 webpack 或 Browserify 类似的构建工具时，Vue 源码会根据 process.env.NODE_ENV 决定是否启用生产环境模式，默认情况为开发环境模式。在 webpack 与 Browserify 中都有方法来覆盖此变量，以启用 Vue 的生产环境模式，同时在构建过程中警告语句也会被压缩工具去除。
7.3）process.env
许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。例如，当不处于生产环境中时，某些 library 为了使调试变得容易，可能会添加额外的日志记录和测试。其实，当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量。
process对象是 Node 的一个全局对象，提供当前 Node 进程的信息。它可以在脚本的任意位置使用，不必通过require命令加载。process.env属性返回一个对象，包含了当前Shell的所有环境变量。通常的做法是，新建一个环境变量NODE_ENV，用它确定当前所处的开发阶段，生产阶段设为production，开发阶段设为develop或staging，然后在脚本中读取process.env.NODE_ENV即可。
7.4）提取组件的 CSS
当使用单文件组件时，组件内的 CSS 会以 <style> 标签的方式通过 JavaScript 动态注入。这有一些小小的运行时开销，如果你使用服务端渲染，这会导致一段“无样式内容闪烁 (fouc)”。将所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存。（通常最好的做法是使用 ExtractTextPlugin 将 CSS 分离成单独的文件）

8）webpack指南
不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。
在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 配置文件。这比在终端中手动输入大量命令要高效的多。

### nodejs
http://javascript.ruanyifeng.com/nodejs/basic.html（基本用法、全局对象和全局变量）
1）全局对象和全局变量
Node提供以下几个全局对象，它们是所有模块都可以调用的。
如process：该对象表示Node所处的当前进程，允许开发者与该进程互动。
Node还提供一些全局函数。
如require()：用于加载模块。
Node提供两个全局变量，都以两个下划线开头。
如__dirname：指向当前运行的脚本所在的目录。
还有一些对象实际上是模块内部的局部变量，指向的对象根据模块不同而不同，但是所有模块都适用，可以看作是伪全局变量，主要为module, module.exports等。
2）模块化结构
Node.js采用模块化结构，按照CommonJS规范定义和使用模块。模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。
require命令用于指定加载模块，加载时可以省略脚本文件的后缀名。
3）CommonJS规范
http://javascript.ruanyifeng.com/nodejs/module.html
Node 应用由模块组成，采用 CommonJS 模块规范。
每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
require方法用于加载模块。

### vue单文件组件
https://cn.vuejs.org/v2/guide/single-file-components.html
关注点分离不等于文件类型分离。在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。

### 框架
路由：https://router.vuejs.org/zh-cn/
状态管理：https://vuex.vuejs.org/zh-cn/
vue-loader：https://vue-loader-v14.vuejs.org/zh-cn/

### 微信公众号
微信网页授权：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
以snsapi_base为scope发起的网页授权，是用来获取进入页面的用户的openid的，并且是静默授权并自动跳转到回调页的。用户感知的就是直接进入了回调页（往往是业务页面）
微信JS-SDK：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
```