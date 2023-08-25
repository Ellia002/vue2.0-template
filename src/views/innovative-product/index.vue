<template>
  <div class="innovative-product">
    <div class="item-show" v-for="(item, i) in viewList" :key="i">
      <div class="image-box"><img :src="item.imgSrc" /></div>
      <div class="content-box">
        <p class="title">{{ item.title }}</p>
        <p class="detail">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import image01 from '@/assets/img/image01.jpg';
import image02 from '@/assets/img/image02.jpg';
export default {
  name: 'InnovativeProduct',
  data() {
    return {
      viewList: [
        {
          imgSrc: image01,
          title:
            '全球最大单体地面电站，青海省共和县全球最大单体地面电站，青海省共和县全球最大单体地面电站，青海省共和县',
          content:
            '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示',
        },
        {
          imgSrc: image02,
          title: '全球最大单体地面电站，青海省共和县',
          content:
            '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示',
        },
        {
          imgSrc: image01,
          title: '全球最大单体地面电站，青海省共和县',
          content:
            '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示',
        },
        {
          imgSrc: image02,
          title: '全球最大单体地面电站，青海省共和县',
          content:
            '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示',
        },
      ],
    };
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
.innovative-product {
  margin: -10px auto 0;
  width: var(--main-width);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item-show {
    margin: 10px 20px 0 0;
    width: calc(33% - 20px);
    background-color: #f8f8f8;
    &:nth-child(3n) {
      margin-right: 0;
    }
    .image-box {
      width: 100%;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
    .content-box {
      padding: 16px;
      .title {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
        word-break: keep-all;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
