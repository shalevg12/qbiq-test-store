import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import ProductListPage from '@/views/ProductListPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductListPage
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: route => {
      const id = Number(route.params.id);
      return { id: isNaN(id) ? route.params.id : id };
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
