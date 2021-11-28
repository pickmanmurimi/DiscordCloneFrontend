export default [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home',
        redirect: { name: 'Friends'},
        meta: {
            requiresAuth: false,
            title: 'Home',
        },
        children: [
            {
                path: '/@me/friends',
                component: () => import('../views/Friends.vue'),
                name: 'Friends',
                meta: {
                    requiresAuth: false,
                    title: 'Friends',
                },
            }
        ]
    },
];
