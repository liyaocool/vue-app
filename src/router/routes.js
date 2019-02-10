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
        component: () => import('@/views/Home')
    },
    {
        path: '/plugin',
        name: 'plugin',
        component: () => import('@/views/Plugin')
    },
    {
        path: '/style',
        name: 'style',
        component: () => import('@/views/Style')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/Mine'),
        children: [
            {
                path: 'contact',
                name: 'contact',
                // meta: {
                //     requireLogin: true
                // },
                component: () => import('@/views/Mine/contact')
            },

        ]
    }
]

export default routes