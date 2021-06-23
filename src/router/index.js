import Vue from 'vue'
import Router from 'vue-router'
import CompLogin from "../components/CompLogin";
import CompRegister from "../components/CompRegister";
import CompIndex from "../components/CompIndex";
import CompHome from "../components/CompHome";
import CompListKnowledges from "../components/CompListKnowledges";
import CompUploadKnowledges from "../components/CompUploadKnowledges";

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
      component: CompListKnowledges
    },
    {
      path: '/qa',
      component: CompUploadKnowledges
    },
    {
      path: '/home',
      component: CompHome
    },
    {
      path: '/login',
      component: CompLogin
    },
    {
      path: '/register',
      component: CompRegister
    }
  ]
})
