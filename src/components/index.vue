<template>
  <div class="index-container">
    <div class="top-menu">
      <router-link class="menu-item" replace to="/index/activityList">活动列表</router-link>
      <router-link class="menu-item" replace to="/index/test">测试</router-link>
    </div>
    <div class="main-box">
      <!--嵌套路由-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.top-menu {
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
  right: 0.3rem;
  display: flex;
  .menu-item {
    width: 50%;
    text-align: center;
    height: 0.85rem;
    line-height: 0.85rem;
    background: #F6F0F0;
    color: #8C7878;
    border: 0.02rem solid #F0E2E2;
    &:first-child {
      border-radius: 0.08rem 0 0 0.08rem;
    }
    &:last-child {
      border-radius: 0 0.08rem 0.08rem 0;
    }
    &.router-link-active {
      background: #E50113;
      color: #FFFFFF;
      border-color: #E50113;
    }
  }
}
.main-box {
  position: absolute;
  top: 1.35rem;
  left: 0.3rem;
  right: 0.3rem;
  bottom: 0.2rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  // 弹性滚动，解决ios上滚动不流畅
}
</style>