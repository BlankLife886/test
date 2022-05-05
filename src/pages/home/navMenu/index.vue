<template>
  <div>
    <el-container>
      <menu-aside :isCollapse="isCollapse"></menu-aside>
      <el-container>
        <el-header>
          <menu-header @updateCollapse="updateCollapse"></menu-header>
        </el-header>
        <menu-main></menu-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MenuAside from './aside';
import MenuMain from './main'
import MenuHeader from "@/pages/home/navMenu/header";

export default {
  name: "home_index",
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    updateCollapse(data) {
      this.isCollapse = data
    }
  },
  components: {
    MenuAside,
    MenuHeader,
    MenuMain
  },
  watch: {},
  created() {
    this.updateCollapse()
  }
}
</script>

<style scoped lang="scss">
.el-header {
  background-color: #532fc0;
  color: #f5f5f5;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #edf2f6;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}
</style>