<template>
  <div class="footer-area">
    <div class="footer-area-inner">
      <div class="left-box">
        <p class="contact">
          <span class="tel">联系电话&nbsp;&nbsp;400-123-666</span>
          <span class="mail">官方邮箱&nbsp;&nbsp;&nbsp;bzy@163.com</span>
        </p>
        <p class="copy-right">
          中国电子技术标准化研究院<span class="middle">版权所有</span
          >京公网安备1123654898455
        </p>
      </div>
      <div class="right-box">
        <div class="code-img"><img src="../assets/img/code.jpg" alt="" /></div>
        <p class="tips">官方微信</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComp',
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.footer-area {
  margin-top: 20px;
  font-size: 14px;
  color: #fff;
  line-height: 1;
  background-color: #202831;
  .footer-area-inner {
    margin: 0 auto;
    width: var(--main-width);
    height: 174px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-box {
      .contact {
        margin-bottom: 48px;
        .tel {
          margin-right: 31px;
        }
      }
      .copy-right {
        .middle {
          margin: 0 16px;
        }
      }
    }
    .right-box {
      text-align: center;
      .code-img {
        margin-bottom: 12px;
        width: 86px;
        height: 86px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
