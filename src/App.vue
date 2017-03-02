<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
// 引入reset,~表示从node_modules查找
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
