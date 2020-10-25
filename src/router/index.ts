import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import( "../views/Projects.vue")
  },
  {
    path: "/background",
    name: "background",
    component: () =>
      import( "../views/Background.vue")
  }/*,
  {
    path: "/trips",
    name: "trips",
    component: () =>
      import( "../views/Trips.vue")
  }*/
];

const router = new VueRouter({
  routes
});

export default router;
