export default [
    {
        name: 'home',
        path: '/income',
        component: () => import('@/views/income/index.vue'),
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
        path: '/submitpayout',
        component: () => import('@/views/submitpayout/index.vue'),
        meta: {
            title: '提现',
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
