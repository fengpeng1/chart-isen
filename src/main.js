import Vue from 'vue';
import Vuetify from 'vuetify';
import vueEventCalendar from 'vue-event-calendar';
import 'vuetify/dist/vuetify.min.css';
import 'vue-event-calendar/dist/style.css';
import axios from 'axios';
import App from './App.vue';
import ApexCharts from 'apexcharts';

axios.defaults.baseURL = 'https://agsapi.noolitic.com/api/v1';
axios.defaults.headers = {
  'Access-Control-Allow-Origin': 'https://agsapi.noolitic.com',
  Authorization: 'Bearer d201aed7-c891-4c17-8b7e-fc5eecf7bff6'
};

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.use(vueEventCalendar, { locale: 'fr' });

Vue.filter('two_digits', value => {
  if (value < 0) {
    return '00';
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

new Vue({
  render: h => h(App)
}).$mount('#app');
