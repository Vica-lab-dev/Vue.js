import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "@/views/HomeView.vue";
import {createRouter, createWebHistory} from "vue-router";
import ProductsView from "@/views/ProductsView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: HomeView},
        {path: "/products", name: "Products", component: ProductsView},
    ],
});

createApp(App)
    .use(router)
    .mount('#app');