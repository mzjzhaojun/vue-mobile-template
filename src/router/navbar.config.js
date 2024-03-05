export default [
    {
        name: 'msg',
        path: '/msg',
        component: () => import('@/views/msg/index.vue'),
        meta: {
            title: '首页',
            icon: 'apps-o'
        }
    },
    {
        name: 'work',
        path: '/work',
        component: () => import('@/views/work/index.vue'),
        meta: {
            title: '代付',
            icon: 'gold-coin-o',
        }
    },
    {
        name: 'permission',
        path: '/permission',
        component: () => import('@/views/permission/index.vue'),
        meta: {
            title: '换汇',
            icon: 'balance-list-o',
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