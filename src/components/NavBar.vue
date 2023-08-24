<template>
  <div class="nav-bar">
    <ul class="nav-bar-menu">
      <li>首页</li>
      <li>光伏产业</li>
      <li>光伏回收</li>
      <li>智能光伏</li>
      <li>光伏地毯</li>
      <li>创新成果产业化</li>
      <li>光伏标准</li>
      <li>服务大厅</li>
      <li>关于我们</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav-bar {
  margin-bottom: 24px;
  height: 80px;
  background: linear-gradient(90deg, #006DF2 0%, #00C07E 100%);
  &-menu {
    margin: 0 auto;
    padding-right: 30px;
    width: 1310px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    li {
      padding: 0 20px;
      min-width: 120px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 17, 36, 0.24);
      }
    }
  }
}
</style>
