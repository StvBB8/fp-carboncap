import Vue from 'vue';

// Core packages
import router from './router';
import store from './store';

// Main component
import App from './App.vue';

// Import CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/scss/application.scss';

// Register packages
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import dataManager from './utils/dataManager';
Vue.use(dataManager);

import translateService from './utils/translateService';
Vue.use(translateService);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
