import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import DialASoup from "../views/DialASoup.vue";
import Services from "../views/Services.vue";
import GetEstimate from "../views/GetEstimate.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/dial-a-soup",
    name: "Dial a Soup",
    component: DialASoup,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/get-estimate",
    name: "Get Estimate",
    component: GetEstimate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
