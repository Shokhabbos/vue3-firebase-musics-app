import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogIn.vue"),
  },
  {
    path: "/playlist/create",
    name: "CreatePlaylist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreatePlaylist.vue"),
  },
  {
    path: "/playlist/:id",
    name: "DetailsPlaylist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailsPlaylist.vue"),
  },
  {
    path: "/playlist/user",
    name: "UserPlaylist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserPlaylist.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
