export default [
    {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '代收',
            icon: 'apps-o'
        }
    },
    {
        name: 'homepay',
        path: '/homepay',
        component: () => import('@/views/payout/index.vue'),
        meta: {
            title: '代付',
            icon: 'balance-o',
        }
    },
    {
        name: 'system',
        path: '/system',
        component: () => import('@/views/system/index.vue'),
        meta: {
            title: '收入',
            icon: 'exchange',
        }
    },
    {
        name: 'my',
        path: '/my',
        component: () => import('@/views/my/index.vue'),
        meta: {
            title: '我的',
            icon: 'contact'
        }
    }
]
