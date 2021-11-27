export default [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home',
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
    },
];
