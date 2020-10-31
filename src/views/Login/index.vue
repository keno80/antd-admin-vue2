<template>
  <div class="login">
    <div class="title">
      <h1>爱吃鱼的猫</h1>
      <p>后台管理</p>
    </div>
    <div class="login_box">
      <a-input placeholder="请输入用户名" size="large" allowClear v-model="userInfo.username">
        <a-icon type="user" slot="prefix"/>
      </a-input>
      <br/>
      <br/>
      <a-input-password placeholder="请输入密码" size="large" v-model="userInfo.password">
        <a-icon type="safety-certificate" slot="prefix"/>
      </a-input-password>
      <br/>
      <br/>
      <a-button type="primary" block @click="login">登录</a-button>
    </div>
  </div>
</template>

<script>
import user from "@/api/user";

export default {
  name: "index",
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if (this.userInfo.username !== '' && this.userInfo.password !== '') {
        user.login(this.userInfo).then(res => {
          if (res.data.code === 200) {
            sessionStorage.setItem('submit_token', res.data.data.token)
            this.$router.replace({
              path: '/dashboard'
            })
          } else {
            this.$ShowMessage('error', res.data.message)
          }
        })
      } else {
        this.$ShowMessage('warning', '账号或密码不能为空')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.login {
  background: url("https://preview.pro.antdv.com/assets/background.a568162c.svg");
  position: fixed;
  height: 100%;
  width: 100%;

  .title {
    text-align: center;
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-family: "Microsoft YaHei", sans-serif;
      font-size: 40px;
      font-weight: 500;
      margin: 0;
      color: #3d3d3d;
    }

    p {
      font-size: 18px;
    }
  }

  .login_box {
    text-align: center;
    width: 330px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
}
</style>