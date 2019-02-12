// @ is an alias to /src
//初始全局加载Home
import index from '@/views/Index.vue'

const routes = [{
        path: '*',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            page: 2
        },
        component: () => import('@/views/Home')
    },
    {
        path: '/plugin',
        name: 'plugin',
        meta: {
            page: 3
        },
        component: () => import('@/views/Plugin')
    },
    {
        path: '/style',
        name: 'style',
        meta: {
            page: 4
        },
        component: () => import('@/views/Style')
    },
    {
        path: '/mine',
        name: 'mine',
        meta: {
            page: 5
        },
        component: () => import('@/views/Mine'),
        children: [{
                path: 'contact',
                name: 'contact',
                meta: {
                    page: 4
                },
                component: () => import('@/views/Mine/contact')
            },

        ]
    }
]

export default routes