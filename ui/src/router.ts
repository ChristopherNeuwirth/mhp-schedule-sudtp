import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'schedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "schedule" */ './views/Schedule.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import(/* webpackChunkName: "impressum" */ './views/Impressum.vue')
    },
    {
      path: '/Privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    }
  ]
});
