import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Index from "../views/index.vue";
import GoMobile from "../views/GoMobile.vue";

import {
  PATH_LOGIN,
  PATH_INDEX,
  PATH_GO_MOBILE,
} from "../constants/path";
Vue.use(VueRouter);

const routes = [
  {
    path: PATH_LOGIN,
    name: "Login",
    component: Login,
  },
  {
    path: PATH_INDEX,
    name: "Index",
    component: Index,
  },
  {
    path: PATH_GO_MOBILE,
    name: "GoMobile",
    component: GoMobile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  if (!/(iPhone|iOS|Android)/i.test(navigator.userAgent)) {
    if (to.path == PATH_GO_MOBILE) {
      next();
    } else {
      next({ path: PATH_GO_MOBILE });
    }
  } else {
    next();
  }
});
export default router;
