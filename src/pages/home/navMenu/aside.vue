<template>
  <div style="background:#edf2f6;">
    <el-aside :width="isCollapse ? '64px' :'200px'"
              class="h-screen shadow-md">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo "
          :collapse-transition="true"
          :collapse="isCollapse"
          router
          v-for="(item,key,index) in sidebarText" :key="index"
          :len="sidebarText.length"
      >
        <el-submenu v-if="item.keys > 2" :key="index" :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item :index="item.list.index">{{ item.list.title }}</el-menu-item>
        </el-submenu>
        <!--        NO子菜单-->
        <el-menu-item :index="item.index" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}{{ key }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "aside_name",
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      sidebarText: {
        Dashboard: {
          index: '/index',
          icon: 'el-icon-menu',
          title: 'Dashboard'
        },
        权限管理: {
          index: '/stats',
          icon: 'el-icon-key',
          title: '权限管理'
        },
        功能: {
          index: '',
          icon: 'el-icon-s-operation',
          title: '功能'
        },
        页面: {
          index: '/wms',
          icon: 'el-icon-s-platform\n',
          title: '页面',
          list: {
            index: '/wms/wmsList',
            icon: 'el-icon-s-platform\n',
            title: '列表信息',
          }
        },
        组件: {
          index: '/menuBar',
          icon: 'el-icon-money',
          title: '组件'
        },
        图表: {
          index: '',
          icon: 'el-icon-s-data',
          title: '图表'
        },
        外部页面: {
          index: '',
          icon: 'el-icon-mobile',
          title: '外部页面'
        },
        多级菜单: {
          index: '',
          icon: 'el-icon-s-grid',
          title: '多级菜单'
        },
        系统管理: {
          index: '',
          icon: 'el-icon-setting',
          title: '系统管理'
        },
        图形编辑器: {
          index: '',
          icon: 'el-icon-pie-chart',
          title: '图形编辑器'
        },
        引导页: {
          index: '',
          icon: 'el-icon-s-open',
          title: '引导页'
        },
      }
    }
  },
  methods: {},
  computed: {},
  components: {},
  mounted() {
  },
  created() {
    console.log(Object.keys(this.sidebarText))
  }
}
</script>

<style scoped lang="scss">
.el-menu-item {
  text-align: left;
}

.el-menu {
  @apply border-0 bg-gray-300
}

::v-deep .el-submenu__title {
  @apply text-left
}

</style>