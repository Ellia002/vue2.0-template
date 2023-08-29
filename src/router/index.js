import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 重写路由实例，处理点击相同路由报错问题
let push = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  // 调用push方法且篡改push方法内部this指向->vueRouter类的实例
  push.call(
    this,
    location,
    () => {},
    () => {}
  );
};

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/IndexView.vue'),
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'IndexView',
    component: () => import('@/views/IndexView.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/innovative-product',
        name: 'InnovativeProduct',
        component: () => import('@/views/innovative-product/index.vue'),
      },
      {
        path: '/map',
        name: 'MapView',
        component: () => import('@/views/map/index.vue'),
      },
      {
        path: '/report',
        name: 'ReportForm',
        component: () => import('@/views/report/index.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
