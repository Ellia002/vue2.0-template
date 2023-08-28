<template>
  <div class="life-cycle">
    <div class="inner-bg">
      <div class="search-box">
        <span class="label">条形码</span>
        <el-input v-model="code" placeholder="请输入内容"></el-input>
      </div>
      <div class="show-line-box">
        <div class="info-show">
          <p>
            <span class="label">生产厂家</span>
            <span class="value">通威太阳能 (成都) 有限公司</span>
          </p>
          <p>
            <span class="label">生产地址</span>
            <span class="value">四川省成都市双流区</span>
          </p>
          <p>
            <span class="label">生产线</span>
            <span class="value">四车间</span>
          </p>
          <p>
            <span class="label">产品型号</span>
            <span class="value">TW 280PE</span>
          </p>
          <p>
            <span class="label">出厂日期</span>
            <span class="value">2017年6月6日</span>
          </p>
        </div>
        <div class="info-show">
          <p>
            <span class="label">安装项目</span>
            <span class="value">通威太阳能 (成都) 有限公司</span>
          </p>
          <p>
            <span class="label">安装地址</span>
            <span class="value">四川省成都市双流区</span>
          </p>
          <p>
            <span class="label">安装位置</span>
            <span class="value">四车间</span>
          </p>
          <p>
            <span class="label">安装日期</span>
            <span class="value">2017年6月6日</span>
          </p>
        </div>
        <div class="info-show">
          <p>
            <span class="label">回收厂家</span>
            <span class="value">瑞赛环保科技有限公司</span>
          </p>
          <p>
            <span class="label">回收地址</span>
            <span class="value">四川省雁江区信息大道2号</span>
          </p>
          <p>
            <span class="label">可收线</span>
            <span class="value">一车间</span>
          </p>
          <p>
            <span class="label">回收日期</span>
            <span class="value">2023年8月3日</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle',
  props: {
    sourceList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      code: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.life-cycle {
  display: flex;
  align-items: center;
  .inner-bg {
    padding: 35px 20px;
    width: 395px;
    max-height: 643px;
    flex-shrink: 0;
    border: 1px solid;
    border-image: linear-gradient(0deg, #183577, #183577) 10 10;
    background: linear-gradient(
      0deg,
      rgba(24, 53, 119, 0.3) 0%,
      rgba(24, 53, 119, 0) 100%
    );
  }
  .search-box {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .label {
      margin-right: 15px;
      font-size: 16px;
      color: #add2ff;
    }
    ::v-deep .el-input {
      width: auto;
      flex: 1;
      .el-input__inner {
        color: #fff;
        font-weight: bold;
        border: 1px solid;
        border-image: linear-gradient(0deg, #183577, #183577) 10 10;
        background: linear-gradient(
          0deg,
          rgba(24, 53, 119, 0.1) 0%,
          rgba(24, 53, 119, 0.15) 100%
        );
      }
    }
  }
  .show-line-box {
    .info-show {
      margin-left: 42px;
      padding: 10px 16px;
      border: 1px solid;
      border-image: linear-gradient(0deg, #0e3e8d, #073582) 10 10;
      background: linear-gradient(
        0deg,
        rgba(14, 62, 141, 0.12) 0%,
        rgba(14, 62, 141, 0) 100%
      );
      position: relative;
      &::before {
        position: absolute;
        left: -44px;
        top: 0;
        width: 19px;
        height: 19px;
        background: url('@/assets/img/li_bg.png') no-repeat left top;
        content: '';
      }
      &::after {
        position: absolute;
        left: -35px;
        top: 19px;
        height: 100%;
        border-left: 1px dashed #164695;
        content: '';
      }
      & + .info-show {
        margin-top: 20px;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
      p {
        display: flex;
      }
      .label {
        margin-right: 4px;
        width: 60px;
        font-size: 13px;
        color: #608abf;
        line-height: 27px;
      }
      .value {
        font-size: 13px;
        color: #add2ff;
        line-height: 27px;
      }
    }
  }
}
</style>
