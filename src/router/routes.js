// @ is an alias to /src
//初始全局加载Home
import index from '@/views/Index.vue'

const routes = [{
        path: '*',
        redirect: '/index/home'
    },
    {
        path: '/index',
        name: 'index',
        component: index, //初始全局加载
        children: [{
            path: 'home',
            name: 'home',
            meta: {
                requireLogin: true
            },
            component: () => import('@/views/Home')
        },
        {
            path:'mine',
            name:'mine',
            component:()=>import('@/views/Mine')
        }
        ]

    },
]

export default routes