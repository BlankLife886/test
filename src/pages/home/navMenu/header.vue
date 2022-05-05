<template>
  <div>
    <div class="flex space-x-4">
      <div>
        <i @click="zoom" class="el-icon-s-fold"></i>
      </div>
      <div>首页面包屑(面包屑过长设置hidden)</div>
      <div class="flex flex-1 justify-end">主题</div>
      <div class="flex flex-none justify-end">设置</div>
      <div class="flex flex-none justify-end">用户</div>
      <div class="flex flex-none justify-end">退出登陆</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header_name",
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    zoom() {
      this.isCollapse = !this.isCollapse
      this.$emit('updateCollapse', this.isCollapse)
    }
  },
  computed: {},
  components: {},
  mounted() {
  },
}
</script>

<style scoped lang="scss">
</style>