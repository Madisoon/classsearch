// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import questiongroup from 'components/home/questiongroup.vue';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MuseUI);

/* eslint-disable no-new */
const routes = [{
  path: '/',
  component: questiongroup
}, {
  path: '/time-entries',
  component: questiongroup
}, {
  path: '/home',
  component: questiongroup
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
/* eslint-disable no-new */
const app = new Vue({
  router,
  ...App
}).$mount('#app');

