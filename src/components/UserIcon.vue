<template>
  <div>
    <div>
      <div class="flex justify-center my-2 ">
        <el-avatar :src="IconURL" :size="size"></el-avatar>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserIcon",
  props: {
    size: {
      type: Number,
    }
  },
  data() {
    return {
      IconURL: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    }
  }
}
</script>

<style scoped>

</style>