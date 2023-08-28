import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
