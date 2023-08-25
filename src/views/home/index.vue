<template>
  <div class="home-box">
    <div class="main-box">
      <div class="policy-box">
        <div class="photo-box">
          <p class="desc-text">
            中国光伏行业协会标委会组件工作组和支撑部件工作组2023年第一次工作会议顺利召开
          </p>
        </div>
        <div class="policy-area"></div>
      </div>
      <div class="news-box">
        <div class="info-box"></div>
        <div class="service-box"></div>
      </div>
      <div class="img-list">
        <div><img src="@/assets/img/image_show01.jpg" alt="" /></div>
        <div><img src="@/assets/img/image_show02.jpg" alt="" /></div>
      </div>
    </div>
    <div class="product-show">
      <h2 class="h2-ttl">成果展示</h2>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in groupList" :key="index">
          <CardItem
            v-for="(card, ind) in item.productShowArr"
            :key="ind"
            :card-info="card"
          ></CardItem>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="link-box">
      <h2 class="link-title">友情链接</h2>
      <ul class="link-list">
        <li><a href="" target="_blank">中华人民共和国工业和信息化部</a></li>
        <li><a href="" target="_blank"> 中国电子技术标准化研究院</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import CardItem from '@/components/CardItem.vue';
export default {
  name: 'HomeView',
  components: {
    CardItem,
  },
  data() {
    return {
      groupList: [
        {
          productShowArr: [
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image02.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
          ],
        },
        {
          productShowArr: [
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image02.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
          ],
        },
        {
          productShowArr: [
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image02.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
            {
              imgSrc: require('@/assets/img/image01.jpg'),
              title: '全球最大单体地面电站，青海省共和县',
              content:
                '成果展示成果展示成果展示成果展示成果展示成果展示成果展示成果展示……',
            },
          ],
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
.home-box {
  .main-box {
    margin: 0 auto 41px;
    width: var(--main-width);
    .policy-box {
      margin-bottom: 45px;
      display: flex;
      justify-content: space-between;
      .photo-box {
        width: 740px;
        height: 370px;
        position: relative;
        border: 1px solid #ccc;
        .desc-text {
          padding: 16px;
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
      .policy-area {
        width: 516px;
      }
    }
    .img-list {
      display: flex;
      justify-content: space-between;
    }
  }
  // 成果展示
  .product-show {
    margin-bottom: 40px;
    padding: 63px 0 28px;
    height: 524px;
    background: url('@/assets/img/product_content_bg.jpg') no-repeat center
      center;
    background-size: cover;
    .h2-ttl {
      margin-bottom: 50px;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      background: url('@/assets/img/product_title_bg.png') no-repeat center
        center;
    }
    ::v-deep .el-carousel {
      margin: -10px auto 0;
      width: var(--main-width);
      .el-carousel__container {
        height: 308px;
      }
      .el-carousel__item {
        display: flex;
        justify-content: space-between;
      }
      .el-carousel__indicators {
        margin-top: 20px;
      }
      .el-carousel__button {
        width: 13px;
        height: 13px;
        background: #ffffff;
        border-radius: 50%;
      }
    }
  }
  .link-box {
    margin: 0 auto;
    width: var(--main-width);
    .link-title {
      margin-bottom: 24px;
      padding-bottom: 17px;
      font-size: 17px;
      font-weight: bold;
      color: #484848;
      line-height: 21px;
      border-bottom: 1px solid #dcdcdc;
    }
    .link-list {
      padding: 0;
      display: flex;
      li {
        margin-right: 10px;
        a {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
          line-height: 21px;
          text-decoration: none;
          &:hover {
            color: #0a67f2;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
