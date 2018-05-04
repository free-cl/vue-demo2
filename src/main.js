import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.scss' // 全局通用样式

//根据屏幕大小设置根节点的fontSize，UI图尺寸是750px
((doc, win, UIWidth) => {
	let caculateFontSize = () => {
		doc.documentElement.style.fontSize = (win.innerWidth / UIWidth * 100) + 'px'
	}
	doc.addEventListener("DOMContentLoaded", caculateFontSize)
	win.addEventListener('resize', caculateFontSize)
})(document, window, 750)

new Vue({
    el: '#app',
    router, // （缩写）相当于 router: router，注入路由
    components: { App },
    // 局部注册组件：https://cn.vuejs.org/v2/guide/components-registration.html
    template: '<App/>'
    // 模板将会替换挂载的元素：https://cn.vuejs.org/v2/api/#template
})