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

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CompHome,
      meta: {title: 'Home'},
    },
    {
      path: "/home",
      component: CompHome,
      meta: {title: 'Home'},
    },
    {
      path: "/knowledge",
      component: CompListKnowledge,
      meta: {title: 'Knowledge'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'staff' || role === 'admin') {
          next()
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
        let role = Vue.prototype.$session.get('role')
        if (role === 'user' || role === 'admin') {
          next()
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/qa',
      component: CompQA,
      meta: {title: 'Question & Answer'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'user' || role === 'staff' || role==='admin') {
          next()
        } else {
          next('/error')
        }
      }
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
      path: '/history',
      component: CompHistory,
      meta: {title: 'History'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'user' || role === 'staff' || role==='admin') {
          next()
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/history/:id',
      component: CompHistoryDetail,
      meta: {title: 'History Detail'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'user' || role === 'staff' || role==='admin') {
          next()
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/user',
      component: CompAD_ListUser,
      meta: {title: 'List User'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'admin') {
          next()
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/user/:id',
      component: CompAD_EditUser,
      meta: {title: 'Edit User'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'admin') {
          next()
        } else {
          next('/error')
        }
      }
    },
    {
      path: '/admin/add',
      component: CompAD_AddUser,
      meta: {title: 'Add User'},
      beforeEnter: (to, from, next) => {
        let role = Vue.prototype.$session.get('role')
        if (role === 'admin') {
          next()
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


