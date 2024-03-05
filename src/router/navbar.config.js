export default [
    {
        name: 'home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '首页',
            icon: 'apps-o'
        }
    },
    {
        name: 'payout',
        path: '/payout',
        component: () => import('@/views/payout/index.vue'),
        meta: {
            title: '代付',
            icon: 'gold-coin-o',
        }
    },
    {
        name: 'exchange',
        path: '/exchange',
        component: () => import('@/views/exchange/index.vue'),
        meta: {
            title: '换汇',
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