<template>
  <div class="nav-bar">
    <ul class="nav-bar-menu">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        @click="routerLink(item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuList: [
        {
          title: '首页',
          path: '/home',
        },
        {
          title: '光伏产业',
          path: '/home',
        },
        {
          title: '光伏回收',
          path: '/map',
        },
        {
          title: '智能光伏',
          path: '/home',
        },
        {
          title: '光伏地毯',
          path: '/home',
        },
        {
          title: '创新成果产业化',
          path: '/innovative-product',
        },
        {
          title: '光伏标准',
          path: '/home',
        },
        {
          title: '服务大厅',
          path: '/home',
        },
        {
          title: '关于我们',
          path: '/home',
        },
      ],
    };
  },
  mounted() {},
  methods: {
    routerLink(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-bar {
  margin-bottom: 24px;
  height: 80px;
  background: linear-gradient(90deg, #006df2 0%, #00c07e 100%);
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
