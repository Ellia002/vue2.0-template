<template>
  <div class="innovative-product">
    <CardItem
      v-for="(item, i) in cardsList"
      :key="i"
      :card-info="item"
    ></CardItem>
  </div>
</template>
<script>
import image01 from '@/assets/img/image01.jpg';
import image02 from '@/assets/img/image02.jpg';
import CardItem from '@/components/CardItem.vue';
export default {
  name: 'InnovativeProduct',
  components: {
    CardItem,
  },
  data() {
    return {
      cardsList: [
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
}
</style>
