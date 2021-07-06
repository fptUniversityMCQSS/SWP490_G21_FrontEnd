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
import CompAD_AddUser from "../components/admin/CompAD_AddUser";
import CompAD_ListKnowledge from "../components/admin/CompAD_ListKnowledge";
import CompAD_UploadKnowledge from "../components/admin/CompAD_UploadKnowledge";
import CompAD_QA from "../components/admin/CompAD_QA";
import CompAD_History from "../components/admin/CompAD_History";
import CompAD_HistoryDetail from "../components/admin/CompAD_HistoryDetail";
import CompQA from "../components/user/CompQA";

Vue.use(Router)

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
      meta: {title: 'Knowledge'}
    },
    {
      path: '/admin/knowledge',
      component: CompAD_ListKnowledge,
      meta: {title: 'Knowledge'}
    },
    {
      path: '/knowledge/upload',
      component: CompUploadKnowledge,
      meta: {title: 'Upload Knowledge'}
    },
    {
      path: '/admin/knowledge/upload',
      component: CompAD_UploadKnowledge,
      meta: {title: 'Upload Knowledge'}
    },
    {
      path: '/qa',
      component: CompQA,
      meta: {title: 'Question & Answer'}
    },
    {
      path: '/admin/qa',
      component: CompAD_QA,
      meta: {title: 'Question & Answer'}
    },
    {
      path: '/home',
      component: CompHome,
      meta: {title: 'Home'}
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
      path: '/admin/history',
      component: CompAD_History,
      meta: {title: 'History'}
    },
    {
      path: '/history/detail',
      component: CompHistoryDetail,
      meta: {title: 'History Detail'}
    },
    {
      path: '/admin/history/detail',
      component: CompAD_HistoryDetail,
      meta: {title: 'History Detail'}
    },
    {
      path: '/admin/users',
      component: CompAD_ListUser,
      meta: {title: 'List User'}
    },
    {
      path: '/admin/edit',
      component: CompAD_EditUser,
      meta: {title: 'Edit User'}
    },
    {
      path: '/admin/add',
      component: CompAD_AddUser,
      meta: {title: 'Add User'}
    },
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
