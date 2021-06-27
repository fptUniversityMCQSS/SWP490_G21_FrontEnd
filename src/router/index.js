import Vue from 'vue'
import Router from 'vue-router'
import CompLogin from "../components/CompLogin";
import CompRegister from "../components/CompRegister";
import CompIndex from "../components/CompIndex";
import CompHome from "../components/CompHome";
import CompListKnowledge from "../components/CompListKnowledge";
import CompUploadKnowledge from "../components/CompUploadKnowledge";
import CompQA from "../components/CompQA";
import CompHistory from "../components/CompHistory";
import CompHistoryDetail from "../components/CompHistoryDetail";

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
      meta:{title:'Knowledge'}
    },

    {
      path: '/knowledge/upload',
      component: CompUploadKnowledge,
      meta:{title:'Upload Knowledge'}
    },
    {
      path: '/qa',
      component: CompQA,
      meta:{title:'Question & Answer'}
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
      path: '/history',
      component: CompHistory,
      meta:{title:'History'}
    },
    {
      path: '/history/detail',
      component: CompHistoryDetail,
      meta:{title:'History Detail'}
    }
    ],
    scrollBehavior() {
      return {x: 0, y: 0}
    }
})
