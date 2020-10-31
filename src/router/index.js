import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/index'
import Overlay from '@/overlay/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Overlay,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashBoard/index'),
        meta: {title: '首页', icon: 'pie-chart'}
      }
    ]
  },
  {
    path: '/test',
    component: Overlay,
    meta: {title: "测试路由", icon: 'pie-chart'},
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/Test/index'),
        meta: {title: '测试', icon: 'pie-chart'}
      },
      {
        path: 'test2',
        name: 'test2',
        component: () => import('@/views/Test/index'),
        meta: {title: '测试2', icon: 'pie-chart'}
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    hidden: true,
    meta: {title: '登录'}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' —— 结算平台'
  if (sessionStorage.getItem('submit_token') || to.path === '/login') {
    next()
  } else {
    next({
      path: '/login',
      replace: true,
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  }
})

export default router
