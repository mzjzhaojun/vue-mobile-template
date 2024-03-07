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
        component: () => import('@/views/my/balance.vue'),
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
    {
        name: 'withdraw',
        path: '/my/withdraw',
        component: () => import('@/views/my/withdraw.vue'),
        meta: {
            title: '提现',
            isNavBar: true
        }
    },
    {
        name: 'withdrawrecord',
        path: '/my/withdrawrecord',
        component: () => import('@/views/my/withdrawrecord.vue'),
        meta: {
            title: '提现记录',
            isNavBar: true
        }
    },
    {
        name: 'applyjournal',
        path: '/my/applyjournal',
        component: () => import('@/views/my/applyjournal.vue'),
        meta: {
            title: '资金记录',
            isNavBar: true
        }
    },
    {
        name: 'exchangerecord',
        path: '/exchange/exchangerecord',
        component: () => import('@/views/exchange/exchangerecord.vue'),
        meta: {
            title: '资金记录',
            isNavBar: true
        }
    },
]