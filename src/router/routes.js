// @ is an alias to /src
//初始全局加载index
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

//主页
{
    path: '/home',
    name: 'home',
    meta: {
        page: 200
    },
    component: () => import('@/views/Home/index')
},

//插件
{
    path: '/plugin',
    name: 'plugin',
    meta: {
        page: 300
    },
    component: () => import('@/views/Plugin/index')
},

//样式
{
    path: '/style',
    name: 'style',
    meta: {
        page: 400
    },
    component: () => import('@/views/Style/index')
},

//我的
{
    path: '/mine',
    name: 'mine',
    meta: {
        page: 500
    },
    component: () => import('@/views/Mine/index'),
    children: [

    ]
},
{
    path: '/mine/contact',
    name: 'contact',
    meta: {
        page: 499
    },
    component: () => import('@/views/Mine/contact')
},
]

export default routes