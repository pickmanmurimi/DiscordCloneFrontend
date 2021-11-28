export default [
    {
        path: '/',
        alias: '/@me/friends',
        component: () => import('../views/Friends.vue'),
        name: 'Friends',
        meta: {
            requiresAuth: false,
            title: 'Friends',
        },
    },
    {
        path: '/@me/store',
        component: () => import('../views/Nitro.vue'),
        name: 'Nitro',
        meta: {
            requiresAuth: false,
            title: 'Nitro',
        },
    }
];
