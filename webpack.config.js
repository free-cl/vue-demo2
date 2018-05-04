const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    // https://doc.webpack-china.org/configuration/dev-server/#devserver
    devServer: {
        host: 'localhost',
        port: 9000,
        open: true,
        inline: true,
        proxy: {
	      "/pweb": {
	        target: "http://localhost:7080"
	      }
	    }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=images/']
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
             {
                test: /\.scss$|\.sass$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                use: ['babel-loader'], 
            },
        ]
    },
    // https://doc.webpack-china.org/configuration/resolve/#resolve
    resolve: {
        // 自动解析确定的扩展，使用户在引入模块时不带扩展
        extensions: ['.js', '.vue', '.json'],
        // 创建 import 或 require 的别名
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, 'src'),
        }
    }
}