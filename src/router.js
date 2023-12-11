import { createWebHistory, createRouter } from "vue-router";
import home from './components/HelloWorld.vue';
import sidebar from './components/sidebar.vue';
import player from './components/sideplayer.vue';


const routes=[
    {
        name:'Home',
        path:'/',
        component:home
    },{
        name:'About',
        path:'/about',
        component:sidebar
    }
    ,{
        name:'Player',
        path:'/player',
        component:player
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;