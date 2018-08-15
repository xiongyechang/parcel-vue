import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import './css/common.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

Vue.use(ElementUI);

const vm = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});