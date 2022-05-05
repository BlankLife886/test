<template>
  <div>
    <el-menu
        style="height: 100vh;"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="false"
        background-color="#545c64"
        text-color="#fff"
        v-bind:class="{active:isActive}"
        active-text-color="#ffd04b">
      <user-icon :size="size"></user-icon>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import UserIcon from '@/components/UserIcon.vue'

export default {
  name: "Navmenu_component",
  props: {
    isCollapse: Boolean,
  },
  components: {
    UserIcon
  },
  data() {
    return {
      size: 80,
      isActive: false
    }
  },
  methods: {},
  watch: {
    isCollapse(newName) {
      if (newName) {
        this.size = 60
        this.isActive = !this.isActive
      } else {
        this.size = 80
        this.isActive = !this.isActive
      }
    }
  },
  created() {
  },
  updated() {
  }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--collapse {
  @apply w-20
}

.active {
  .el-icon-location:before, .el-icon-menu:before {
    @apply flex justify-center w-10
  }
}
</style>