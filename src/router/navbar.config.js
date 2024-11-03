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
        name: 'homepay',
        path: '/homepay',
        component: () => import('@/views/payout/index.vue'),
        meta: {
            title: '银行卡',
            icon: 'balance-o',
        }
    },
    {
        name: 'exchange',
        path: '/exchange',
        component: () => import('@/views/exchange/index.vue'),
        meta: {
            title: '支付宝',
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