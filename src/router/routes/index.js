export default [
  {
    path: "/home",
    name: "Home",
    component: () => import("../../views/Home/Home.vue"),
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import("../../views/AboutUs/AboutUs.vue"),
  },
  {
    path: "/map",
    name: "KosovaPath",
    component: () =>
      import(
        /* webpackChunkName: "mapPath" */ "../../components/KosovaMap/MapPath.vue"
      ),
  },
];
