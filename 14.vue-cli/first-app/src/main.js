import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './App.vue';
import CompOne from './components/CompOne.vue';
import CompTwo from './components/CompTwo.vue';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/two', component: CompTwo },
    { path: '*', component: CompOne },
  ],
  mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
