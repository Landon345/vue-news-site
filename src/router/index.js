import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

import ArticleDetail from "../views/ArticleDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articles.vue"),
  },
  {
    path: "/articles/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
