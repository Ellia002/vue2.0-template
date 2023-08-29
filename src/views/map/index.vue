<template>
  <div class="main-visual">
    <ul class="tab-list">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        :class="{ active: isCurrent === index }"
        @click="changeTab(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-carousel
      ref="carouselRef"
      direction="vertical"
      :autoplay="false"
      :loop="false"
    >
      <el-carousel-item v-for="(item, index) in tabList" :key="index">
        <component :is="item.component"></component>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import MapView from './MapView.vue';
import CompanyListQuery from './CompanyListQuery.vue';
import { throttle } from 'lodash-es';
export default {
  name: 'MainVisual',
  components: {
    MapView,
    CompanyListQuery,
  },
  data() {
    return {
      tabList: [
        {
          name: '地图',
          component: 'MapView',
        },
        {
          name: '列表',
          component: 'CompanyListQuery',
        },
      ],
      componentName: 'MapView',
      isCurrent: 0,
    };
  },
  methods: {
    changeTab(item, index) {
      this.isCurrent = index;
      this.$refs.carouselRef.setActiveItem(index);
    },
    handleScroll(event) {
      if (event.deltaY > 0) {
        // 向下滚动
        this.isCurrent = 1;
        this.$refs.carouselRef.next();
      } else if (event.deltaY < 0) {
        // 向上滚动
        this.isCurrent = 0;
        this.$refs.carouselRef.prev();
      }
    },
  },
  mounted() {
    window.addEventListener('wheel', () => throttle(this.handleScroll, 200));
  },
  beforeDestroy() {
    window.removeEventListener('resize', () =>
      throttle(this.handleScroll, 200)
    );
  },
};
</script>
<style lang="scss" scoped>
.main-visual {
  margin: -24px 0 -21px;
  padding: 0 80px;
  display: flex;
  background-color: #091830;
  .tab-list {
    margin-top: 50px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    color: #fff;
    border-radius: 8px;
    background-color: #080f38;
    li {
      cursor: pointer;
      & + li {
        margin-top: 10px;
      }
      &.active {
        color: #6266ec;
      }
    }
  }
  ::v-deep .el-carousel {
    flex: 1;
    .el-carousel__container {
      width: 100%;
      height: 600px;
      .el-carousel__item {
        display: flex;
        width: 100%;
      }
    }
    .el-carousel__indicators {
      display: none;
    }
  }
}
</style>
