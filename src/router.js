import { createWebHistory, createRouter } from "vue-router";
import AboutView from './views/AboutView.vue';

import Home from './views/Home.vue'


const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },{
        name:'About',
        path:'/about',
        component:AboutView
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;