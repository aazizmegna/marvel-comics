import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

// Import your components for the router
import Home from './components/Home.vue';
import Details from './components/Details.vue';

library.add(faUserSecret, faHeart, faStar);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/details', component: Details },
  ],
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);

app.mount('#app');
