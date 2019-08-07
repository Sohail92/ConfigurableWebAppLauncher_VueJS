import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { setupComponents } from './config/setup-components';

Vue.config.productionTip = false

setupComponents(Vue);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
