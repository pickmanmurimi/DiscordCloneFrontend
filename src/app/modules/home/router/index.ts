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
    },
    {
        path: '/@me/channel/:channel',
        component: () => import('../views/DirectMessage.vue'),
        name: 'DirectMessage',
        meta: {
            requiresAuth: false,
            title: 'DirectMessage',
        },
    }
];
