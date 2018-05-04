<template>
  <div class="form-container">
      <div class="input-row">
        <input class="input" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="input-row">
        <input class="input" type="password" placeholder="请输入密码" v-model="password">
      </div>
      <button type="button" @click="login" class="main-btn red-btn" :disabled="!username || !password">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log(this.username, this.password)
      const username = this.username.trim()
      const password = this.password
      // this.$router.push('/index/activityList')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
    padding: 3rem 0.4rem 0.2rem;
    .input-row {
        &:first-child {
            margin-bottom: 0.52rem;
        }
    }
    .main-btn {
        margin-top: 0.6rem;
    }
}
</style>