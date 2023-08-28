<template>
  <div class="company-list-query">
    <div class="inner-box">
      <el-row :gutter="20">
        <el-col :span="12">
          企业名称：
          <el-input v-model="queryParams.name" placeholder="请输入"></el-input>
        </el-col>
        <el-col :span="12">
          企业地址：
          <el-input
            v-model="queryParams.address"
            placeholder="请输入"
          ></el-input>
        </el-col>
      </el-row>
      <ul class="company-ul">
        <li>
          <div class="name">xxx有限公司</div>
          <div class="other">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </li>
        <li>
          <div class="name">xxx有限公司</div>
          <div class="other">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </li>
        <li>
          <div class="name">xxx有限公司</div>
          <div class="other">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </li>
        <li>
          <div class="name">xxx有限公司</div>
          <div class="other">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompanyListQuery',
  props: {
    companyList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      queryParams: {
        name: '',
        address: '',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.company-list-query {
  padding: 50px 0;
  flex: 1;
  .inner-box {
    margin: 0 auto;
    width: 800px;
    color: #fff;
    ::v-deep .el-row {
      margin-bottom: 30px;
      .el-col {
        display: flex;
        align-items: center;
      }
      .el-input {
        margin-left: 16px;
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
    .company-ul {
      margin-top: -16px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        margin-top: 16px;
        padding: 16px;
        width: calc(50% - 10px);
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
}
</style>
