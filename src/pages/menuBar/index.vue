<template>
  <div>
    <h1>侧边栏</h1>
    <!--    最外层-->
    <div class="flex flex-row">
      <div :class="{zoom:isZoom}"
           class="bg-purple-900 rounded-2xl shadow-2xl justify-start transition-all duration-700 w-16 h-full">
        <div class="flex flex-col text-left">
          <!--          最上层-->
          <div class="rounded-t-2xl text-white pt-2">
            <div v-if="isZoom" class="text-center pt-2">
              <el-avatar :src="userIcon" :size="80" alt=""></el-avatar>
              <div>{{ user }}</div>
            </div>
            <div class="flex justify-center" v-else>
              <el-avatar :src="userIcon" class="self-center" alt=""></el-avatar>
            </div>
          </div>
          <!--          中层隔断-->
          <div class="pt-5"></div>
          <!--          中层list-->
          <div class="overflow-y-auto overflow-x-hidden scrollbar" style="height: 41rem;">
            <template v-if="isZoom">
              <div v-for="(item,index) of sidebarText" :key="index"
                   class="bg-gray-100 border-gray-700 p-3 pl-6 transform transition motion-reduce:transform-none hover:scale-125 hover:bg-pink-400 duration-300 focus:outline-none ">
                <div class="relative">
                  <i :class="item.icon" class="mr-1"></i>
                  <span class="absolute">{{ item.title }}</span>
                  <!--                  判断是否存在子菜单-->
                  <i class="ml-36 el-icon-arrow-down"></i>
                </div>
              </div>
            </template>
            <template v-else>
              <el-tooltip class="item" effect="light"
                          v-for="(item,index) of sidebarText"
                          :key="index"
                          :content="item.title" placement="right">
                <div
                    class="bg-gray-100 p-3 text-center border-gray-700 transform transition motion-reduce:transform-none hover:scale-125 hover:bg-pink-400 duration-300 focus:outline-none ">
                  <i :class="item.icon" class="text-2xl"></i>
                </div>
              </el-tooltip>
            </template>
          </div>
        </div>
      </div>
      <div class="ml-44">
        <h1>this is test</h1>
        <button
            @click="zoom"
            class="w-28 h-12 rounded-xl bg-red-500 flex justify-center transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none">
          缩放
        </button>
        <div>
          <div class="w-24 h-24 bg-blue-700 flex justify-center">
            <div class="self-center">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_name",
  data() {
    return {
      user: 'user',
      isZoom: true,
      userIcon: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      sidebarText: {
        Dashboard: {
          icon: 'el-icon-menu',
          title: 'Dashboard'
        },
        权限管理: {
          icon: 'el-icon-key',
          title: '权限管理'
        },
        功能: {
          icon: 'el-icon-s-operation',
          title: '功能'
        },
        页面: {
          icon: 'el-icon-s-platform\n',
          title: '页面'
        },
        组件: {
          icon: 'el-icon-money',
          title: '组件'
        },
        图表: {
          icon: 'el-icon-s-data',
          title: '图表'
        },
        外部页面: {
          icon: 'el-icon-mobile',
          title: '外部页面'
        },
        多级菜单: {
          icon: 'el-icon-s-grid',
          title: '多级菜单'
        },
        系统管理: {
          icon: 'el-icon-setting',
          title: '系统管理'
        },
        图形编辑器: {
          icon: 'el-icon-pie-chart',
          title: '图形编辑器'
        },
        引导页: {
          icon: 'el-icon-s-open',
          title: '引导页'
        },
      }
    }
  },
  methods: {
    zoom() {
      this.isZoom = !this.isZoom
    }
  },
  computed: {},
  components: {},
  mounted() {
  },
}
</script>

<style scoped lang="scss">
//悬浮滚动条
.scrollbar {
  &:focus-within {
    &::-webkit-scrollbar {
      width: 10px;
    }
  }

  &::-webkit-scrollbar-track { /*外层轨道*/
    box-shadow: none;
    background: transparent;
  }

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    //background: transparent;
    background: rgba(243, 244, 246, 1);

  }

  &::-webkit-scrollbar-thumb { /*滚动的滑块*/
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    background-clip: padding-box;
    border-radius: 3px;
    background-color: rgb(76, 29, 149);

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  &:hover::-webkit-scrollbar {
    width: 6px;
    height: 6px;

  }

  &::-webkit-scrollbar-thumb { /*滚动的滑块*/
    border-radius: 4px;
  }

  &.scrollbar-bgc {
    &::-webkit-scrollbar-thumb {
      background-color: rgba(35, 75, 161,);

      &:hover {
        background: rgba(11, 81, 232,);
      }
    }
  }
}

.zoom {
  //width: 200px;
  @apply w-56 transition-all ease-out duration-700
}

.item {
  //margin: 8px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>