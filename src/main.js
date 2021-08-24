import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/bootstrap.css'
import './assets/vendors/linericon/style.css'
import './assets/css/font-awesome.min.css'
import './assets/vendors/owl-carousel/owl.carousel.min.css'
import './assets/vendors/lightbox/simpleLightbox.css'
import './assets/vendors/nice-select/css/nice-select.css'
import './assets/vendors/animate-css/animate.css'
import './assets/vendors/jquery-ui/jquery-ui.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import './assets/js/jquery-3.2.1.min.js'
import './assets/js/popper.js'
import './assets/js/stellar.js'
import './assets/vendors/nice-select/js/jquery.nice-select.min.js'
import './assets/vendors/owl-carousel/owl.carousel.min.js'
import './assets/js/jquery.ajaxchimp.min.js'
import './assets/js/mail-script.js'
import './assets/vendors/jquery-ui/jquery-ui.js'
import './assets/vendors/counter-up/jquery.waypoints.min.js'
import './assets/vendors/counter-up/jquery.counterup.js'
import './assets/vendors/lightbox/simpleLightbox.min'
import './assets/js/theme.js'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-flash-message/dist/vue-flash-message.min.css'

import router from './router'
import VueAxios from 'vue-axios'
import axios from "axios"
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import VueMeta from "vue-meta"
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import VeeValidate from "vee-validate";
import Vuex from 'vuex'
import Loading from 'vue-loading-overlay'
import VueFlashMessage from 'vue-flash-message';
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import './assets/font-awesome/css/font-awesome.min.css'
import VTooltip from 'v-tooltip'
import Map from 'map'
// Vue.use(VueSession, options)
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(Map)
Vue.use(VTooltip)
Vue.use(VuejsDialog);
Vue.use(VueFlashMessage);
Vue.use(Loading)
Vue.use(BootstrapVue, axios, VueAxios, VueMeta)
Vue.use(BootstrapVueIcons)
const options = {
  persist: true
}
Vue.use(VueSessionStorage)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  components: {App},
  template: '<App/>'
})
