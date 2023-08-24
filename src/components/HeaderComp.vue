<template>
  <div class="header-box">
    <h1 class="head-title">
      <span class="head-title-zh">智能光伏服务平台</span>
      <span class="head-title-en">
        Intelligent photovoltaic public service platform
      </span>
    </h1>
    <el-button type="primary">后台登录</el-button>
  </div>
</template>
<script>
export default {
  name: 'HeaderComp',
  data() {
    return {

    }
  },
  mounted() {
    this.handleHeader();
  },
  methods: {
    handleHeader() {
      console.log('ddasdsad');
    },
  },
};
</script>
<style lang="scss" scoped>
.header-box {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: var(--main-width);
  .head-title {
    display: flex;
    flex-direction: column;
    &-zh {
      font-size: 32px;
      font-family: YouSheBiaoTiHei, sans-serif;
      font-weight: 400;
      color: #2268BD;
      line-height: 1;
    }
    &-en {
      font-size: 14px;
      font-family: Arial, sans-serif;
      font-weight: 400;
      color: #2268BD;
      line-height: 1;
    }
  }
  .el-button {
    width: 136px;
    height: 48px;
    border-radius: 4px;
    border-color: #0072EC;
    background-color: #0072EC;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
