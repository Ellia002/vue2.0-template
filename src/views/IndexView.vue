<template>
  <div class="container">
    <!-- 头部 -->
    <header-comp></header-comp>
    <!-- 导航 -->
    <nav-bar></nav-bar>
    <!-- 内容 -->
    <router-view></router-view>
    <!-- 底部 -->
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  name: 'IndexView',
  components: {
    HeaderComp,
    NavBar,
    FooterComp,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
