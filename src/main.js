// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Navigation from './components/Navigation.vue';
// Quill
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { QuillEditor } from 'vue-quill-editor'

Vue.config.productionTip = false;

Vue.component('app-navigation', Navigation);
Vue.component('quill-editor', QuillEditor)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
});
