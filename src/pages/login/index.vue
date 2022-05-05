<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/pages/login/form/LoginForm'

export default {
  name: "login_index",
  methods: {
    goHello() {
      this.$router.push('/hello')
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style scoped>

</style>