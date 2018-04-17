import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Admin from '@/components/admin'
import Table from '@/components/table'
import Business from '@/components/business'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/erxin'
    },
    {
      path: '/erxin',
      name: 'Home',
      component: Home,
      meta: { title: '而信-专业外包团队' },
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { title: '而信-管理登录' },
    },
    {
      path: '/business',
      name: 'Business',
      component: Business,
      meta: { title: '而信-商务合作' },
    },
    {
      path: '/table',
      name: 'Table',
      component: Table,
      meta: { requiresAuth: true,title: '而信-我的管理' },
    }
  ]
})
// 判断是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let key = sessionStorage.getItem('key');
    if ( key != null ) {
      next();
    } else {
       next({
        path: '/admin',
        //query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;