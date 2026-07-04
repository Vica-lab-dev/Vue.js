import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "@/views/HomeView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: HomeView},
    ],
});

createApp(App)
    .use(router)
    .mount('#app');