import { createWebHistory, createRouter } from "vue-router";
import home from './components/HelloWorld.vue';
import player from './components/player.vue';
import right_sidebar from './components/right_sidebar.vue';


const routes=[
    {
        name:'Home',
        path:'/',
        component:home
    },{
        name:'About',
        path:'/about',
        component:right_sidebar
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