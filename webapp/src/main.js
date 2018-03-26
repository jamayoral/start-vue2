import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import RestauranteTop from './RestauranteTop.vue'
import RestaurantesList from './RestaurantesList.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/contacto', component: Contacto },
  { path: '/home', component: Home },
  { path: '/restaurante-destacado/:id', name: 'restaurante-destacado' , component: RestauranteTop },
  { path: '/restaurantes-list', component: RestaurantesList },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
