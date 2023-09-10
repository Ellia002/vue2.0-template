<template>
  <div class="nav-bar">
    <ul class="nav-bar-menu">
      <li v-for="(item, index) in menuList" :key="index">
        <span @click.prevent="routerLink(item.path)">{{ item.title }}</span>
        <div class="submenu-box">
          <ul class="submenu-list" v-if="item.children?.length">
            <li
              v-for="(child, ind) in item.children"
              :key="ind"
              @click="routerLink(child.path)"
            >
              {{ child.title }}
            </li>
          </ul>
          <div v-if="item.isSpecial" class="special-menu-box">
            <el-row class="sub-tabs">
              <el-col :span="12">项目申报</el-col>
              <el-col :span="12">服务</el-col>
            </el-row>
            <!-- 光伏产业 -->
            <el-row class="sub-title">
              <el-col :span="24">&gt;&nbsp;光伏产业</el-col>
            </el-row>
            <el-row class="sub-links">
              <el-col :span="12"><span>光伏行业规范条件申报</span></el-col>
            </el-row>
            <!-- 光伏回收 -->
            <el-row class="sub-title">
              <el-col :span="24">&gt;&nbsp;光伏回收</el-col>
            </el-row>
            <el-row class="sub-links">
              <el-col :span="12"><span>光伏回收企业申报</span></el-col>
              <el-col :span="12"><span>申请碳标签</span></el-col>
            </el-row>
            <!-- 智能光伏 -->
            <el-row class="sub-title">
              <el-col :span="24">&gt;&nbsp;智能光伏</el-col>
            </el-row>
            <el-row class="sub-links">
              <el-col :span="12"><span>智能光伏试点示范申报</span></el-col>
              <el-col :span="12">
                <span>光伏智能制造能力成熟度评价</span>
                <span>智能光伏产品测试与实证</span>
                <span>智能光伏系统软件评测</span>
              </el-col>
            </el-row>
            <!-- 创新成果产业化 -->
            <el-row class="sub-title">
              <el-col :span="24">&gt;&nbsp;创新成果产业化</el-col>
            </el-row>
            <el-row class="sub-links">
              <el-col :span="12"><span>创新技术成果申报</span></el-col>
            </el-row>
            <!-- 创新成果产业化 -->
            <el-row class="sub-title">
              <el-col :span="24">&gt;&nbsp;光伏低碳</el-col>
            </el-row>
            <el-row class="sub-links">
              <el-col :span="12"></el-col>
              <el-col :span="12"><span>光伏企业碳核算</span></el-col>
            </el-row>
          </div>
        </div>
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
          children: [
            {
              title: '政策解读',
              path: '/policy',
            },
            {
              title: '行业资讯',
              path: '/industry-info',
            },
            {
              title: '产业地图',
              path: '/map',
            },
          ],
        },
        {
          title: '光伏回收',
          path: '/report',
        },
        {
          title: '智能光伏',
          path: '/',
        },
        {
          title: '光伏地毯',
          path: '/',
        },
        {
          title: '创新成果产业化',
          path: '/innovative-product',
        },
        {
          title: '光伏标准',
          path: '/',
        },
        {
          title: '服务大厅',
          path: '/',
          isSpecial: true,
        },
        {
          title: '关于我们',
          path: '/',
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
  flex-shrink: 0;
  background: linear-gradient(90deg, #006df2 0%, #00c07e 100%);
  &-menu {
    margin: 0 auto;
    width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    > li {
      min-width: 120px;
      flex: 1;
      height: 100%;
      position: relative;
      color: #fff;
      > span {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        white-space: nowrap;
      }
      &:hover {
        background-color: rgba(0, 17, 36, 0.24);
        .submenu-box {
          display: block;
        }
      }
      .submenu-box {
        position: absolute;
        top: 100%;
        left: 50%;
        min-width: 100%;
        text-align: center;
        display: none;
        transform: translate(-50%, 0);
        z-index: 10;
        background-color: #0072ec;
        .submenu-list {
          width: 100%;
          li {
            padding: 8px 16px;
            font-size: 16px;
            cursor: pointer;
            &:hover {
              background-color: rgba(0, 17, 36, 0.24);
            }
          }
        }
        .special-menu-box {
          padding: 10px 16px;
          width: 420px;
          ::v-deep .el-row {
            margin-left: 15px;
            .el-col {
              text-align: left;
              font-size: 14px;
            }
          }
          .sub-title {
            margin: 8px 0;
            .el-col {
              font-size: 16px;
            }
          }
          .sub-tabs {
            margin: 0 0 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            .el-col {
              font-size: 18px;
              font-weight: bold;
            }
          }
          .sub-links {
            .el-col {
              span {
                cursor: pointer;
                &:hover {
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
