import Vue from 'vue'
import Router from 'vue-router'
import CompLogin from "../components/user/CompLogin";
import CompRegister from "../components/user/CompRegister";
import CompIndex from "../components/user/CompIndex";
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
import multiguard from 'vue-router-multiguard';

Vue.use(Router)

const isAdmin = (to, from, next) => {
  if (Vue.prototype.$session.get('user') === 'khailq') {
    next()
  } else {
    next('/error')
  }
}
const isStaff = (to, from, next) => {
  if (Vue.prototype.$session.get('user') === 'thienlh') {
    next()
  } else {
    next('/error')
  }
}
const isUser = (to, from, next) => {
  if (Vue.prototype.$session.get('user') === 'binhtb') {
    next()
  } else {
    next('/error')
  }
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: CompIndex
    },
    {
      path: '/knowledge',
      component: CompListKnowledge,
      meta: {title: 'Knowledge'},
      beforeEnter: multiguard([isUser, isAdmin, isStaff])
    },
    {
      path: '/knowledge/upload',
      component: CompUploadKnowledge,
      meta: {title: 'Upload Knowledge'},
      beforeEnter: multiguard([isUser, isAdmin, isStaff])
    },
    {
      path: '/qa',
      component: CompQA,
      meta: {title: 'Question & Answer'},
      beforeEnter: multiguard([isUser, isAdmin, isStaff])
    },
    {
      path: '/home',
      component: CompHome,
      meta: {title: 'Home'},
      beforeEnter: multiguard([isUser, isAdmin, isStaff])
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
      meta: {title: 'History'}
    },
    {
      path: '/history/detail',
      component: CompHistoryDetail,
      meta: {title: 'History Detail'},
      beforeEnter: multiguard([isUser, isAdmin, isStaff])
    },
    {
      path: '/admin/users',
      component: CompAD_ListUser,
      meta: {title: 'List User'},
      beforeEnter: isAdmin
    },
    {
      path: '/admin/edit',
      component: CompAD_EditUser,
      meta: {title: 'Edit User'},
      beforeEnter: isAdmin,
    },
    {
      path: '/admin/add',
      component: CompAD_AddUser,
      meta: {title: 'Add User'},
      beforeEnter: isAdmin,
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


