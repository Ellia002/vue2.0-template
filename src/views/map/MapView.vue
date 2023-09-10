<template>
  <div class="map-view">
    <div ref="myChart" class="chart-box"></div>
    <CompanyListView :company-list="companyList"></CompanyListView>
    <!-- 生命周期溯源组件 -->
    <!-- <LifeCycle></LifeCycle> -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import LifeCycle from './LifeCycle.vue';
import CompanyListView from '@/views/map/CompanyListView';
let myChart = null; // 可改可不改，官方说用这种性能比较好
export default {
  name: 'MapView',
  components: {
    LifeCycle,
    CompanyListView,
  },
  data() {
    return {
      // 圆点数据
      pointCircle: [
        {
          value: [109.754859, 19.189767],
          label: {
            name: '海口市',
          },
          type: 'setup',
          detail: {
            project: '敦煌太阳能发电有限公司',
            address: '广西省柳州时光电产业园',
            position: '4#方针',
            dateTime: '2017年7月30日',
          },
        },
        {
          value: [116.41995, 40.18994],
          label: {
            name: '北京市',
          },
          type: 'recycle',
          detail: {
            manufacturers: '瑞赛环保科技有限公司',
            address: '四川省雁江区信息大道2号',
            line: '一车间',
            dateTime: '2023年8月3日',
          },
        },
        {
          value: [85.294711, 41.371801],
          label: {
            name: '乌鲁木齐市',
          },
          type: 'product',
          detail: {
            manufacturers: '通威太阳能（成都）有限公司',
            address: '四川省成都市双流区',
            line: '四车间',
            number: 'TW-280PE',
            dateTime: '2017年6月6日',
          },
        },
      ],
      // 流向线条的经纬度，可自定义样式
      pointLine: [
        {
          coords: [
            [109.754859, 19.189767], // 初始点经纬度
            [116.41995, 40.18994], //目标点经纬度
          ],
          label: {
            start: '海口',
            end: '北京',
          },
        },
        {
          coords: [
            [109.754859, 19.189767],
            [85.294711, 41.371801],
          ],
          label: {
            start: '海口',
            end: '乌鲁木齐',
          },
        },
      ],
      code: '',
      companyList: [],
      haveClicked: false,
      // myChart: null,
    };
  },
  methods: {
    initChart() {
      const chartContainer = this.$refs.myChart;
      myChart = echarts.init(chartContainer);
      // 配置选项和数据
      fetch('/js/china.json')
        .then((res) => res.json())
        .then((jsonData) => {
          echarts.registerMap('china', jsonData);
          const options = {
            //  tooltip 该版本需在 option中定义才开启
            //  子图层可自定义内容
            tooltip: {
              //格式化内容，返回为空，地图组件不起作用，得在地图组件重新定义
              textStyle: {
                color: '#fff',
              },
              backgroundColor: 'rgba(245,108,45,0.5)',
            },
            backgroundColor: '#091830',
            geo: {
              map: 'china',
              zoom: 1.1,
              // roam: true,
              itemStyle: {
                borderWidth: 1,
                areaColor: 'rgba(23,30,59,0.8)',
                borderColor: '#0E6997',
              },
            },
            series: [
              {
                type: 'map',
                map: 'china',
                zoom: 1.1,
                // roam: true,
                itemStyle: {
                  borderWidth: 1,
                  areaColor: 'rgba(23,30,59,0.8)',
                  borderColor: '#0E6997',
                },
                emphasis: {
                  //地图高亮
                  itemStyle: {
                    areaColor: '#0683ae',
                  },
                },
                tooltip: {
                  show: false,
                },
                select: {
                  //地图高亮
                  itemStyle: {
                    areaColor: '#0683ae',
                  },
                },
                data: [
                  {
                    name: '新疆',
                    companyList: [
                      {
                        company: 'xxx',
                        address: '新疆xxx',
                        line: '物理法',
                      },
                      {
                        company: 'xxx',
                        address: '新疆xxx',
                        line: '化学法',
                      },
                    ],
                  },
                  {
                    name: '北京',
                    companyList: [
                      {
                        company: 'xxx',
                        address: '北京xxx',
                        line: '物理法',
                      },
                      {
                        company: 'xxx',
                        address: '北京xxx',
                        line: '化学法',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'lines',
                effect: {
                  show: true,
                  period: 5, // 箭头指向速度，值越小速度越快
                  trailLength: 0.1, // 特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: 'pin',
                  symbolSize: 8, // 图标大小
                  color: '#fff',
                },
                lineStyle: {
                  color: '#08ab16',
                  width: 2, // 线条宽度
                  opacity: 0.1, // 尾迹线条透明度
                  // curveness: 0.2, // 尾迹线条曲直度
                  type: 'dashed',
                },
                tooltip: {
                  show: false,
                },
                data: this.pointLine,
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                  number: 6,
                  scale: 2.5,
                  brushType: 'fill',
                  color: '#08ab16',
                },
                itemStyle: {
                  color: '#02c9da',
                },
                tooltip: {
                  formatter({ data }) {
                    if (data.type === 'product') {
                      return `生产厂家：${data.detail.manufacturers}</br>生产地址：${data.detail.address}</br>生产线：${data.detail.line}</br>产品型号：${data.detail.number}</br>生产日期：${data.detail.dateTime}`;
                    } else if (data.type === 'recycle') {
                      return `回收厂家：${data.detail.manufacturers}</br>回收地址：${data.detail.address}</br>回收线：${data.detail.line}</br>回收日期：${data.detail.dateTime}`;
                    } else if (data.type === 'setup') {
                      return `安装项目：${data.detail.project}</br>安装地址：${data.detail.address}</br>安装位置：${data.detail.position}</br>安装日期：${data.detail.dateTime}`;
                    } else {
                      return `${data.label.name}`;
                    }
                  },
                  borderColor: '#5D6069',
                  backgroundColor: 'rgba(16, 25, 60, 0.8)',
                },
                data: this.pointCircle,
              }, //地图线的动画效果,
            ],
          };
          myChart.setOption(options);
        });
      myChart.on('click', (params) => {
        this.haveClicked = true;
        this.companyList = params.data?.companyList || [];
      });
      myChart.on('mouseover', (params) => {
        if (this.haveClicked) return;
        this.companyList = params.data?.companyList || [];
      });
    },
    resizeChart() {
      if (myChart) {
        myChart.resize();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
    window.addEventListener('resize', this.resizeChart);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeChart);
  },
};
</script>
<style lang="scss" scoped>
.map-view {
  padding-right: 5px;
  width: 100%;
  flex: 1;
  display: flex;
  .chart-box {
    flex: 1;
    width: 100%;
    height: 100%;
    // height: 700px;
  }
}
</style>
