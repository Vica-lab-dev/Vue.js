import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "@/views/HomeView.vue";
import {createRouter, createWebHistory} from "vue-router";
import ProductsView from "@/views/ProductsView.vue";
import SingleProductView from "@/views/SingleProductView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: HomeView},
        {path: "/products", name: "Products", component: ProductsView},
        {path: "/product/:id", name: "SingleProduct", component: SingleProductView},
    ],
});

createApp(App)
    .use(router)
    .mount('#app');