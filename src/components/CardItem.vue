<template>
  <div class="card-item">
    <div class="image-box"><img :src="cardInfo.imgSrc" /></div>
    <div class="content-box">
      <p class="title">{{ cardInfo.title }}</p>
      <p class="detail">{{ cardInfo.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardsItem',
  props: {
    cardInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleHeader() {},
  },
};
</script>
<style lang="scss" scoped>
.card-item {
  cursor: pointer;
  margin: 10px 57px 0 0;
  width: calc(33.3% - 38px);
  background: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.85) 88%,
    rgba(255, 255, 255, 0.86) 100%
  );
  box-shadow: 0px 7px 12px 0px rgba(10, 103, 242, 0.1);
  border-radius: 4px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  .image-box {
    height: 174px;
    width: 100%;
    img {
      width: 100%;
      vertical-align: top;
      border-radius: 4px 4px 0 0;
    }
  }
  .content-box {
    padding: 28px 16px 37px;
    .title {
      margin-bottom: 16px;
      font-size: 17px;
      font-weight: bold;
      color: #252a30;
      line-height: 21px;
      white-space: nowrap;
      word-break: keep-all;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .detail {
      font-size: 15px;
      font-weight: 400;
      color: #63666b;
      line-height: 21px;

      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
