import { createWebHistory, createRouter } from "vue-router";
import home from './components/HelloWorld.vue';

import right_sidebar from './components/right_sidebar.vue';
import main_home from './components/main_home.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component:main_home
    },{
        name:'About',
        path:'/about',
        component:home
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;