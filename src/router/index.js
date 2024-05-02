
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ContactPage from "../views/ContactPage.vue";
import  NotFound from "../views/NotFound.vue";
import  ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path:"/contactez-nous",
    name: "contact",
    component: ContactPage,
    alias: "/contact"
  },
  {
    path: '/products/:name',
    name: "product-details",
    component: ProductDetails,
    props: true
  },
 {  path: '/:catchAll(.*)',
    component: NotFound
 } 

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
