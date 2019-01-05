// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import echarts from 'echarts';
import Axios from "axios";
import './mock';

import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = Axios;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
