<template>
  <div class="home-box">
    <div class="main-box">
      <div class="policy-box">
        <div class="photo-box">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../assets/img/photo.jpg" alt="" />
              <p class="desc-text">
                中国光伏行业协会标委会组件工作组和支撑部件工作组2023年第一次工作会议顺利召开
              </p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="policy-area">
          <div class="com-tab-box">
            <ul class="tab-list">
              <li class="active">政策文件</li>
            </ul>
            <div class="more-icon" @click="viewMore('policy')">
              <img src="../../assets/img/icon_more.png" alt="" />
            </div>
          </div>
          <ul class="news-list">
            <li v-for="(item, index) in policyList" :key="index">
              <span class="title">{{ item.title }}</span>
              <span class="date">{{ item.dateTime }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="news-box">
        <div class="info-box">
          <h2 class="head-line"><span>行业资讯</span></h2>
          <div class="com-tab-box">
            <ul class="tab-list">
              <li
                v-for="(item, index) in tabList"
                :key="index"
                :class="{ active: isCurrent === index }"
                @click="handleClick(index)"
              >
                {{ item.menu }}
              </li>
            </ul>
            <div class="more-icon" @click="viewMore('policy')">
              <img src="../../assets/img/icon_more.png" alt="" />
            </div>
          </div>
          <ul class="news-list">
            <li v-for="(item, index) in infoList" :key="index">
              <span class="title">{{ item.title }}</span>
              <span class="date">{{ item.dateTime }}</span>
            </li>
          </ul>
        </div>
        <div class="service-box">
          <h2 class="head-line"><span>便捷服务大厅</span></h2>
          <div class="cate-box">
            <div class="cate-list" v-for="cate in cateArr" :key="cate.cateName">
              <h3 class="cate-name">{{ cate.cateName }}</h3>
              <ul class="sub-list">
                <li v-for="(item, index) in cate.subList" :key="index">
                  <div class="icon"><img :src="item.icon" alt="" /></div>
                  <div class="name">{{ item.name }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
      policyList: [
        {
          title:
            '工业和信息化部等六部门关于推动能源电子工业和信息化部等六部门关于推动能源电子',
          dateTime: '2023-07-25',
        },
        {
          title: '《关于推动能源电子产业发展的知道意见》解读',
          dateTime: '2023-07-25',
        },
        {
          title: '一图读懂《关于推动能源电子产业发展的指导意见》',
          dateTime: '2023-07-25',
        },
        {
          title: '五部门关于印发《智能光伏产业创新发展行',
          dateTime: '2023-07-25',
        },
        {
          title: '住房和城乡建设部 交通运',
          dateTime: '2023-07-25',
        },
        {
          title: '国家发展改革委 财政部 国家能源局关于做',
          dateTime: '2023-07-25',
        },
      ],
      // 行业资讯tab
      tabList: [
        {
          menu: '光伏回收',
          type: '1',
        },
        {
          menu: '智能光伏',
          type: '2',
        },
        {
          menu: '光伏碳足迹',
          type: '3',
        },
        {
          menu: '创新成果',
          type: '4',
        },
        {
          menu: '光伏标准',
          type: '5',
        },
      ],
      // 资讯列表
      infoList: [
        {
          title:
            '关于征集《低碳工业园区评价技术规范》团体标准编制组成员的通知关于征集《低碳工业园区评价技术规范》团体标准编制组成员的通知',
          dateTime: '2023-07-25',
        },
        {
          title:
            '关于开展2023年工业通信业百项团体标准应用示范项目申报工作的通知',
          dateTime: '2023-07-25',
        },
        {
          title:
            '电子标准院关于行业标准《低碳产品评价技术规范光伏组件》征求意见的通知',
          dateTime: '2023-07-25',
        },
        {
          title:
            '关于征集中国光伏行业协会团体标准《光伏跟踪支架智能跟踪性能测试方法……',
          dateTime: '2023-07-25',
        },
        {
          title:
            '中国光伏行业协会/电子标准院关于召开第三届光伏产业高质量发展与技术……',
          dateTime: '2023-07-25',
        },
        {
          title:
            '中国光伏行业协会标委会 组件工作组和支撑部件工作组2023年第一次工作……',
          dateTime: '2023-07-25',
        },
        {
          title:
            '电子标准院组织中国代表团参加国际电工委员会太阳光伏能源系统技术委员……',
          dateTime: '2023-07-25',
        },
        {
          title: '晶体硅光伏组件尺寸研讨会顺利召开',
          dateTime: '2023-07-25',
        },
        {
          title:
            '关于征集中国光伏行业协会团体标准《晶体硅光伏电池用低压化学气相淀积……',
          dateTime: '2023-07-25',
        },
        {
          title:
            '2023年IEC/TC 82大会中国代表团预备会暨《光伏领域国际标准化战略路线……',
          dateTime: '2023-07-25',
        },
        {
          title: '关于召开光伏组件回收与绿色低碳技术研讨会的通知',
          dateTime: '2023-07-25',
        },
        {
          title:
            '全国太阳光伏能源系统标准化技术委员会（SAC/TC90）2022年度工作会议……',
          dateTime: '2023-07-25',
        },
        {
          title: '关于召开第三届中国光伏产业高质量发展与技术标准论坛的通知',
          dateTime: '2023-07-25',
        },
        {
          title: '关于召开光伏组件回收与绿色低碳技术研讨会的通知',
          dateTime: '2023-07-25',
        },
      ],
      // 便捷服务大厅
      cateArr: [
        {
          cateName: '申报类',
          subList: [
            {
              name: '回收企业申报',
              icon: require('@/assets/img/Group 13658.svg'),
            },
            {
              name: '光伏行业规范条件申报',
              icon: require('@/assets/img/Group 13659.svg'),
            },
            {
              name: '光伏行业规范条件申报',
              icon: require('@/assets/img/Group 13658.svg'),
            },
            {
              name: '创新技术成果申报',
              icon: require('@/assets/img/Group 13661.svg'),
            },
            {
              name: '标准立项申话',
              icon: require('@/assets/img/Group 13667.svg'),
            },
            {
              name: '敬请期待',
              icon: require('@/assets/img/Group 13663.svg'),
            },
          ],
        },
        {
          cateName: '服务类',
          subList: [
            {
              name: '光伏智能制能力成热晓评价',
              icon: require('@/assets/img/Group 13668.svg'),
            },
            {
              name: '智能光伏产品测试与实证',
              icon: require('@/assets/img/Group 13666.svg'),
            },
            {
              name: '智能光伏系统钦件评测',
              icon: require('@/assets/img/Group 13664.svg'),
            },
            {
              name: '技术成热晚评价',
              icon: require('@/assets/img/Group 13665.svg'),
            },
            {
              name: '光伏企业碳核查',
              icon: require('@/assets/img/Group 13660.svg'),
            },
            {
              name: '中请碳标签',
              icon: require('@/assets/img/Group 13662.svg'),
            },
          ],
        },
        {
          cateName: '需求类',
          subList: [
            {
              name: '回收需求发布',
              icon: require('@/assets/img/Group 13670.svg'),
            },
            {
              name: '企业需求数据库',
              icon: require('@/assets/img/Group 13671.svg'),
            },
            {
              name: '敬请期待',
              icon: require('@/assets/img/Group 13669.svg'),
            },
          ],
        },
      ],
      isCurrent: 0,
    };
  },
  mounted() {},
  methods: {
    viewMore(type) {
      console.log('查看更多', type);
    },
    handleClick(index) {
      this.isCurrent = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.home-box {
  .main-box {
    margin: 0 auto 41px;
    width: 1280px;;
    // 公共央视
    .head-line {
      margin-bottom: 33px;
      padding-bottom: 16px;
      line-height: 1;
      border-bottom: 1px solid #ccc;
      span {
        padding-left: 12px;
        font-size: 22px;
        color: #0a67f2;
        display: inline-block;
        border-left: 7px solid #0a67f2;
      }
    }
    .com-tab-box {
      margin-bottom: 29px;
      padding: 0 0 13px 4px;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #e4eaf3;
      .tab-list {
        display: flex;
        li {
          font-size: 22px;
          line-height: 23px;
          color: #666666;
          cursor: pointer;
          & + li {
            margin-left: 26px;
          }
          &.active {
            color: #0a67f2;
          }
        }
      }
      .more-icon {
        cursor: pointer;
      }
    }
    .news-list {
      li {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        & + li {
          margin-top: 22px;
        }
        .title {
          padding-left: 18px;
          flex: 1;
          color: #33373f;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: keep-all;
          position: relative;
          &:hover {
            color: #0a67f2;
            &::before {
              background: #0a67f2;
            }
          }
          &::before {
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            height: 6px;
            background: #bebebe;
            border-radius: 50%;
            transform: translate(0, -50%);
            content: '';
          }
        }
        .date {
          margin-left: 49px;
          color: rgba(51, 55, 63, 0.6);
        }
      }
    }
    .policy-box {
      margin-bottom: 45px;
      display: flex;
      justify-content: space-between;
      .photo-box {
        width: 740px;
        height: 370px;
        position: relative;
        ::v-deep .el-carousel {
          height: 100%;
          &__container {
            height: 100%;
          }
          &__item {
            display: flex;
            align-items: center;
          }
          &__indicators {
            display: none;
          }
        }
        img {
          width: 100%;
          // height: auto;
        }
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
        margin-top: 10px;
        width: 516px;
      }
    }
    .news-box {
      margin-bottom: 31px;
      display: flex;
      justify-content: space-between;
      .info-box {
        width: 740px;
      }
      .service-box {
        width: 516px;
        .cate-box {
          padding: 30px 20px 59px;
          background: linear-gradient(0deg, #f4faff 0%, #eff7fc 100%);
          .cate-list {
            & + .cate-list {
              margin-top: 42px;
            }
          }
          .cate-name {
            margin-bottom: 24px;
            font-size: 22px;
            font-weight: bold;
            color: #343c48;
            text-align: center;
            line-height: 1;
            background: url('@/assets/img/title_bg.png') no-repeat center center;
          }
          .sub-list {
            margin-top: -15px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
              margin-top: 15px;
              padding: 8px 4px;
              width: calc(33.3% - 9px);
              border: 1px solid rgba(34, 104, 189, 0.15);
              box-shadow: 0px 3px 9px 0px rgba(96, 145, 195, 0.12);
              background: #fff;
              .icon {
                margin: 0 auto 8px;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                // background-color: #eef8ff;
                img {
                  width: 100%;
                }
              }
              .name {
                color: #333b43;
                line-height: 16px;
                text-align: center;
                letter-spacing: -1px;
              }
            }
          }
        }
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
      width: 1280px;;
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
    width: 1280px;;
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
