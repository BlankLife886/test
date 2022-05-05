// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        // 重定向到login
        path: '/',
        redirect: '/login'
    },
    {
        // 登陆
        path: '/login',
        name: 'login',
        component: () => import('../pages/login/index')
    },
    {
        // 首页
        path: '/home',
        name: 'home',
        component: () => import('../pages/home/navMenu/index'),
        children: [
            {
                // 首页
                path: '/index',
                name: 'index',
                component: () => import('../pages/home/index')
            },
            {
                // 数据管理
                path: '/stats',
                name: 'stats',
                component: () => import('../pages/stats/index')
            },
            {
                // 菜单栏
                path: '/menuBar',
                name: 'menuBar',
                component: () => import('../pages/menuBar/index')
            },
            {
                //信息管理
                path: '/wms',
                name: 'wms',
                component: () => import('../pages/wms/index'),
                children: [
                    {
                        path: '/wms/wmsList',
                        name: 'wmsList',
                        component: () => import('../pages/wms/wmsList/index')
                    },
                ]
            },
        ]
    },

    {
        path: '/chartter',
        name: 'chart',
        component: () => import('../pages/chart/index')
    },
]

const router = new VueRouter({
    // 路由模式：hash(默认)，history模式
    mode: 'history',
    linkActiveClass: 'active',
    //路由规则
    routes,
})

export default router
