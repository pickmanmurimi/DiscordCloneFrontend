import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from "vue-router";
import moduleRoutes from '@/app/router'
// import {useStore} from "@/store/store";

let routes:Array<RouteRecordRaw> = moduleRoutes;

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// const store = useStore();

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        /**
         *  for a route that requires auth
         *  check if they are authenticated
         */
        // if (store.getters.isAuthenticated) {
        //     next();
        // } else {
        //     next({ name: 'Login' });
        // }
    } else {
        // routes that should only be accessed while unauthenticated
        // if (to.matched.some((record) => record.meta.strictNoAuth)) {
        //     if (store.getters.isAuthenticated) {
        //         next({ name: 'Home'})
        //     }
        // }

        next();
    }

});


export default router