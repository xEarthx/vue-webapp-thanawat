import { createWebHashHistory, createRouter } from 'vue-router'
import home from "../views/home.vue"
import product from '@/views/product.vue'
import about from '@/views/about.vue'
import notfound from '@/views/notfound.vue'
import productdetail from '@/views/productdetail.vue'

const routes = [

    { path: '/', component: home},
    { path: '/about', component: about},
    { path: '/product', component: product},
    { path: '/product/:id',
      name: 'productdetail',
      component: productdetail,
      props: true,  
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: notfound
    },
    

];

const router = createRouter({

    history: createWebHashHistory(),
    routes,

})

export default router;