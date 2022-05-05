<template>
  <div class="hello">
    <h1>hello world</h1>
    <button @click="goBack">goBack</button>
    <button @click="getUser">getUser</button>
    <p>{{ this.$route.params }}</p>
  </div>
</template>

<script>
import {getnav} from '@/util/http'

export default {
  name: 'HelloWorld',
  computed: {
    username() {
      return this.$route.params.username
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getUser() {
      console.log(this.$route.params);
    },
    getData() {
      getnav().then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
