import Vue from 'vue'
import Router from 'vue-router'
import CompLogin from "../components/CompLogin";
import CompRegister from "../components/CompRegister";
import CompIndex from "../components/CompIndex";
import CompHome from "../components/CompHome";
import CompListKnowledges from "../components/CompListKnowledges";
import CompUploadKnowledges from "../components/CompUploadKnowledges";
import CompQA from "../components/CompQA";

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
      component: CompListKnowledges,
      meta:{title:'Knowledge'}
    },
    {
      path: '/qa',
      component: CompUploadKnowledges,
      meta:{title:'Knowledge'}
    },
    {
      path: '/home',
      component: CompHome,
      meta:{title:'Home'}
    },
    {
      path: '/login',
      component: CompLogin,
      meta:{title:'Login'}
    },
    {
      path: '/register',
      component: CompRegister,
      meta:{title:'Register'}
    },
    {
      path: '/q&a',
      component: CompQA,
      meta:{title:'Question and Answer'}
    }
  ]
})
