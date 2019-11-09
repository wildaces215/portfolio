/* eslint-disable quotes */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Meta from "vue-meta";

import VueSwimlane from "vue-swimlane";
import history from "connect-history-api-fallback";
import "animate.css/animate.css";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.use(VueSwimlane);
Vue.use(Meta);
Vue.use(BootstrapVue);
Vue.use(history);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
