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
```

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
https://doc.webpack-china.org/configuration/dev-server/#devserver
https://doc.webpack-china.org/configuration/resolve/#resolve
4）babel：
https://babeljs.cn/docs/setup/#installation
Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。(低版本浏览器不支持es6)

### 尺寸单位使用rem
将UI图上的px尺寸单位换算成rem