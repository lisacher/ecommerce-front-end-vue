import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/new",
    name: "new",
    component: () => import("../views/New.vue"),
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue"),
  },
  {
    path: "/login",
    name: "user-login",
    component: () => import("../views/UserLogin.vue"),
  },
  {
    path: "/profile",
    name: "user-profile",
    component: () => import("../views/UserEditProfile.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
