// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'

// 移动端解决点击穿透插件
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
