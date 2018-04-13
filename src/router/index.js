import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './../components/HelloWorld.vue';
import Randomizer from './../components/Randomizer.vue';
import Navigation from './../components/Navigation.vue';
import Home from './../components/Home.vue';
import Testing from './../components/Testing.vue';
import DashboardList from '../components/dashboard/DashboardList.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import Post from '../components/dashboard/Post.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/hello', name: 'hello-world', component: HelloWorld },
        { path: '/nav', name: 'navigation', component: Navigation },
        { path: '/random', name: 'randomize', component: Randomizer },
        { path: '/test', name: 'test', component: Testing },
        { path: '/dashboards', name: 'dashboards', component: DashboardList },
        { path: '/dashboard/:id', name: 'dashboard', component: Dashboard},
        { path: '/post/:id', name: 'post', component: Post}
    ],
    mode: 'history',
});
