export default [
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
        name: 'merchant',
        path: '/my/merchant',
        component: () => import('@/views/my/merchant.vue'),
        meta: {
            title: '商户列表',
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
        name: 'income',
        path: '/my/income',
        component: () => import('@/views/my/income.vue'),
        meta: {
            title: '代收明细',
            isNavBar: true
        }
    },
    {
        name: 'payoutdetail',
        path: '/my/payoutdetail',
        component: () => import('@/views/my/payoutdetail.vue'),
        meta: {
            title: '代付明细',
            isNavBar: true
        }
    },
    {
        name: 'incomedetail',
        path: '/my/incomedetail',
        component: () => import('@/views/my/incomedetail.vue'),
        meta: {
            title: '代收明细',
            isNavBar: true
        }
    },
    {
        name: 'channel',
        path: '/my/channel',
        component: () => import('@/views/my/channel.vue'),
        meta: {
            title: '渠道列表',
            isNavBar: true
        }
    },{
        name: 'systemstatisticalreports',
        path: '/my/systemstatisticalreports',
        component: () => import('@/views/my/systemstatisticalreports.vue'),
        meta: {
            title: '代收统计',
            isNavBar: true
        }
    },
]
