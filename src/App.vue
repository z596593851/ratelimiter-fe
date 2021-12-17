<template>
  <div>
    <el-header style="background-color: gray">
      我是表头
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  // 导入组件
  import Aside from "@/views/Aside.vue";

  export default {
    name: "layout",
    components: {
      Aside
    },
    data() {
      return { isCollapse: true, asWidth: "100" };
    },
    methods: {
      menu() {
        this.isCollapse = !this.isCollapse;
      },
      logout() {
        this.$router.push("/");
      }
    }
  };
</script>
<style lang="scss" scoped>
  .menu {
    margin-top: 10px;
    text-align: left;
  }
  .menu.logout {
    text-align: right;
  }
</style>