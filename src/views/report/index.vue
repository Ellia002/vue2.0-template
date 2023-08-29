<template>
  <div class="report-form">
    <ul class="tab-list">
      <li
        v-for="(item, index) in tabList"
        :key="index"
        :class="{ active: isCurrent === index }"
        @click="changeTab(index)"
      >
        {{ item.name }}
        <i class="el-icon-arrow-right" v-if="isCurrent === index"></i>
      </li>
    </ul>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item class="head-title-item" label="企业信息"></el-form-item>
        <el-form-item label="企业社会信用编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="企业区县">
          <el-input v-model="form.county"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.contact"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item class="auto-code-item" label="短信验证码">
          <el-input v-model="form.authCode"></el-input>
          <el-button v-if="countdown === 0" type="primary" @click="sendCode"
            >发送</el-button
          >
          <el-button disabled v-else type="primary" @click="sendCode"
            >{{ countdown }}s</el-button
          >
        </el-form-item>
        <el-form-item class="head-title-item" label="技术信息"></el-form-item>
        <el-form-item label="技术描述">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="资料上传">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item class="submit-item">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReportForm',
  data() {
    return {
      tabList: [
        {
          name: '光伏回收',
        },
        {
          name: '技术申报',
        },
        {
          name: '申报进度查询',
        },
        {
          name: '技术企业查询',
        },
      ],
      form: {
        code: '',
        name: '',
        county: '',
        address: '',
        contact: '',
        tel: '',
        authCode: '',
        desc: '',
      },
      isCurrent: 0,
      countdown: 0,
    };
  },
  mounted() {
    this.handleHeader();
  },
  methods: {
    handleHeader() {
      console.log('ddasdsad');
    },
    onSubmit() {
      console.log('submit!');
    },
    changeTab(index) {
      this.isCurrent = index;
    },
    updateCountdown() {
      if (this.countdown > 0) {
        this.countdown--; // 倒计时减少一秒
        setTimeout(() => {
          this.updateCountdown(); // 继续更新倒计时
        }, 1000); // 每秒更新一次
      }
    },
    sendCode() {
      // 发送验证码的逻辑代码

      // 开始倒计时
      this.countdown = 60;
      this.updateCountdown();
    },
  },
};
</script>
<style lang="scss" scoped>
.report-form {
  margin: 0 auto;
  width: var(--main-width);
  display: flex;
  .tab-list {
    width: 200px;
    li {
      margin-top: 10px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000;
      cursor: pointer;
      background-color: #d7d7d7;
      &.active {
        color: #fff;
        background-color: #18517f;
      }
    }
  }
  .form-box {
    flex: 1;
    .el-form {
      margin: 0 auto;
      width: 600px;
      .head-title-item {
        ::v-deep .el-form-item__label {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .auto-code-item {
        ::v-deep .el-form-item__content {
          display: flex;
          .el-button {
            margin-left: 12px;
          }
        }
      }
      .submit-item {
        ::v-deep .el-form-item__content {
          text-align: center;
        }
      }
    }
  }
}
</style>
