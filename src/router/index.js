import Vue from 'vue'
import Router from 'vue-router'
import CompLogin from "../components/user/CompLogin";
import CompRegister from "../components/user/CompRegister";
import CompHome from "../components/user/CompHome";
import CompListKnowledge from "../components/user/CompListKnowledge";
import CompUploadKnowledge from "../components/user/CompUploadKnowledge";
import CompHistory from "../components/user/CompHistory";
import CompHistoryDetail from "../components/user/CompHistoryDetail";
import CompAD_ListUser from "../components/admin/CompAD_ListUser";
import CompAD_EditUser from "../components/admin/CompAD_EditUser";
import CompQA from "../components/user/CompQA";
import CompAD_AddUser from "../components/admin/CompAD_AddUser";
import CompError from "../components/user/CompError";
import CompMyAccount from "../components/user/CompMyAccount";
import CompAbout from "../components/user/CompAbout";
import CompAD_Log from "../components/admin/CompAD_Log";
import CompAPILibrary from "../components/user/CompAPILibrary";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CompHome,
    meta: {title: 'DeepQuiz'},
    },
    {
      path: '/login',
      component: CompLogin,
      meta: {title: 'Login'}
    },
    {
      path: '/register',
      component: CompRegister,
      meta: {title: 'Register'}
    },
    {
      path: '/about',
      component: CompAbout,
      meta: {title: 'About us'}
    },
    {
      path: '/library',
      component: CompAPILibrary,
      meta: {title: 'API Library'}
    },
    {
      path: '/user',
      component: CompMyAccount,
      meta: {title: 'Account'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'staff' || role === 'admin' || role === 'user') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: "/knowledge",
      component: CompListKnowledge,
      meta: {title: 'Knowledge'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'user' || role === 'staff' || role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/knowledge/upload',
      component: CompUploadKnowledge,
      meta: {title: 'Upload Knowledge'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'staff' || role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/qa',
      component: CompQA,
      meta: {title: 'Question Answer'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'user' || role === 'staff' || role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/history',
      component: CompHistory,
      meta: {title: 'Question Answer History'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'user' || role === 'staff' || role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/history/:id',
      component: CompHistoryDetail,
      meta: {title: 'View Question Answer'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'user' || role === 'staff' || role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/user',
      component: CompAD_ListUser,
      meta: {title: 'List Account'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/user/:id',
      component: CompAD_EditUser,
      meta: {title: 'Edit Account'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/add',
      component: CompAD_AddUser,
      meta: {title: 'Create Account'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/log',
      component: CompAD_Log,
      meta: {title: 'Logging'},
      beforeEnter: (to, from, next) => {
        if (Vue.prototype.$session.exists('user')) {
          let role = Vue.prototype.$session.get('user').role
          if (role === 'admin') {
            next()
          }
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/error',
      component: CompError,
      meta: {title: 'Error'}
    },
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})


