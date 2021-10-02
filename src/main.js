import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import BaseContainer from './components/UI/BaseContainer.vue';
import App from './App.vue';
import Cocktails from './views/Cocktails.vue';
import About from './views/About.vue';
import CocktailItem from './views/CocktailItem.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'cocktails',
        component: Cocktails 
      },
      {
        path: '/about',
        name: 'about',
        component: About 
      },
      {
          path: '/cocktail/:id',
          name: 'cocktail',
          component: CocktailItem
      }
    ]
})

const app = createApp(App);

app.component('base-container', BaseContainer);

app.use(router).mount('#app');
