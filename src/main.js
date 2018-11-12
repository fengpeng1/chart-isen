import Vue from 'vue';
import Vuetify from 'vuetify'
import vueEventCalendar from 'vue-event-calendar'
import 'vuetify/dist/vuetify.min.css'
import 'vue-event-calendar/dist/style.css'
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(vueEventCalendar, {locale: 'fr'})

new Vue({
  render: h => h(App)
}).$mount('#app');
