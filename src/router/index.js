import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../App.vue";
import Home from "../views/Home.vue";
import Cities from "../views/Cities.vue";
import Gastronomy from "../views/Gastronomy.vue";
import Tourism from "../views/Tourism.vue";
import Shopping from "../views/Shopping.vue";
import AboutUs from "../views/AboutUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cities",
    name: "Cities",
    component: Cities,
  },
  {
    path: "/gastronomy",
    name: "Gastronomy",
    component: Gastronomy,
  },
  {
    path: "/tourism",
    name: "Tourism",
    component: Tourism,
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");

export default router;
