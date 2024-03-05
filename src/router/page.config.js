export default [
    {
        name: 'balancerecord',
        path: '/my/balancerecord',
        component: () => import('@/views/my/balancerecord.vue'),
        meta: {
            title: '充值记录',
            isNavBar: true
        }
    },
    {
        name: 'balance',
        path: '/my/balance',
        component: () => import('@/views/my/balancerecord.vue'),
        meta: {
            title: '充值',
            isNavBar: true
        }
    },
    {
        name: 'aisle',
        path: '/my/aisle',
        component: () => import('@/views/my/aisle.vue'),
        meta: {
            title: '我的通道',
            isNavBar: true
        }
    },
]