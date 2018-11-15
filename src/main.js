import Vue from 'vue';
import Vuetify from 'vuetify'
import vueEventCalendar from 'vue-event-calendar'
import 'vuetify/dist/vuetify.min.css'
import 'vue-event-calendar/dist/style.css'
import App from './App.vue';


Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.use(vueEventCalendar, {locale: 'fr'});

Vue.filter('two_digits', (value) => {
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
