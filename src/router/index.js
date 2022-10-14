import { createRouter, createWebHistory, } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue'),

		meta: { title: 'Home' },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
