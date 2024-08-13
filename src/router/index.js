import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/HelloWorld.vue';
import XiaoTuXian from '@/views/XiaoTuXian.vue';
import MyTable from '@/views/MyTable.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/xiaoTuXian',
      name: 'XiaoTuXian',
      component: XiaoTuXian
    },
    {
      path: '/myTable',
      name: 'MyTable',
      component: MyTable
    }
  ]
});