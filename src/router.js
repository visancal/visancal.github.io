import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Resume from './components/Resume.vue';
import Courses from './components/Courses.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/resume',
			name: 'resume',
			component: Resume
		},
		{
			path: '/courses',
			name: 'courses',
			component: Courses
		}
	]
});
