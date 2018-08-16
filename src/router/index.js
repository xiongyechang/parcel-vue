import Vue from 'vue';
import Router from 'vue-router';
const Login = () => import('../views/Login/Login.vue');
const Home = () => import('../views/Home/Home.vue');
const User = () => import('../views/User/User.vue');
Vue.use(Router);
const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/user',
		name: 'user',
		component: User
	},
	{
		path: '*',
		redirect: '/login'
	}
];
const router = new Router({
	routes: routes
});
// router.beforeEach((to, from, next) => {
// 	console.log(to,from,next);
// });
export default router

