import Vue from 'vue';
import Vuex from 'vuex';



import user from './modules/user';
// import home from './modules/home';
// import login from './modules/login';


Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		user
		// home,
		// login
	}
});

export default store