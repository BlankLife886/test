<template>
  <div>
    <el-form :model="userForm" :rules="formRules" label-width="70px" label-position="left" ref="userForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登陆</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      userForm: {
        username: '',
        password: '',
      },
      formRules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 3, max: 10, message: '用户名长度为3-10个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 5, max: 15, message: '用户名长度为5-15个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    login() {
      this.$router.push('./home')
    }
  },
}
</script>

<style scoped>

</style>