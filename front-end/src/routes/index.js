import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Página inicial
import FormPage from '../pages/Form.vue'; // Página do Formulário
import CatalogPage from '../pages/Catalogo.vue'; // Página do Catálogo de Capivara

const routes = [
  { path: '/', component: Home }, // Rota para a Home
  { path: '/form', component: FormPage }, // Rota para o Formulário
  { path: '/catalogo', component: CatalogPage }, // Rota para o Catálogo de Capivaras
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;