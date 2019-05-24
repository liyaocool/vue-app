// @ is an alias to /src
//初始全局加载index
import index from "@/views/Index";

const routes = [
  {
    path: "*",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: index
  },

  //主页
  {
    path: "/home",
    name: "home",
    meta: {
      page: 20,
      showFooter: true
    },
    component: () => import("@/views/Home/index")
  },

  //插件
  {
    path: "/plugin",
    name: "plugin",
    meta: {
      page: 30,
      showFooter: true
    },
    component: () => import("@/views/Plugin/index")
  },
  {
    path: "/betterScroll",
    name: "betterScroll",
    meta: {
      page: 31,
      showHeader: true,
      title: "better-scroll",
      canBack: true
    },
    component: () => import("@/views/Plugin/betterScroll")
  },

  //样式
  {
    path: "/style",
    name: "style",
    meta: {
      page: 40,
      showFooter: true
    },
    component: () => import("@/views/Style/index")
  },
  {
    path: "/cssGrid",
    name: "cssGrid",
    meta: {
      page: 40,
      showHeader: true,
      title: "CSS Grid",
      canBack: true
    },
    component: () => import("@/views/Style/cssGrid")
  },

  //我的
  {
    path: "/mine",
    name: "mine",
    meta: {
      page: 50,
      showFooter: true
    },
    component: () => import("@/views/Mine/index"),
    children: []
  },
  {
    path: "/mine/contact",
    name: "contact",
    meta: {
      page: 51,
      showHeader: true,
      canBack: true,
      title: "联系我们"
    },
    component: () => import("@/views/Mine/contact")
  }
];

export default routes;
