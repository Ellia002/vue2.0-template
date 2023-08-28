<template>
  <div class="company-list-view">
    <table>
      <thead>
        <tr>
          <th>企业名称</th>
          <td>地点</td>
          <td>技术路线</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody v-show="companyList.length">
        <tr v-for="(item, index) in companyList" :key="index">
          <th>{{ item.company }}</th>
          <td>{{ item.address }}</td>
          <td>{{ item.line }}</td>
          <td class="operation">详情</td>
        </tr>
      </tbody>
      <tbody v-show="!companyList.length">
        <tr>
          <th colspan="4">暂无数据</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle',
  props: {
    companyList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.company-list-view {
  margin-top: 130px;
  width: 350px;
  flex-shrink: 0;
  table {
    border-collapse: collapse;
    th,
    td {
      padding: 4px 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.8);
      white-space: nowrap;
      text-align: center;
    }
    .operation {
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
