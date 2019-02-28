import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';

Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.directive('font', {
  bind(el, binding, vnode) {
    el.style.fontFamily = binding.value;
  },
});

export const eBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');
