import Vue from 'vue';
import VueMeta from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
