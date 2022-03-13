export default [
  {
    path: "/cities",
    name: "Cities",
    component: () => import("../../views/Cities/Cities.vue"),
  },
  {
    path: "/cities/create",
    name: "CreateCity",
    component: () => import("../../views/Cities/Create/AddCity.vue"),
  },
  {
    path: "/view/:id",
    name: "ViewCity",
    component: () => import("../../views/Cities/ViewCity.vue"),
  },
  //General Details
  {
    path: "/gastronomy",
    name: "Gastronomy",
    component: () => import("../../views/Cities/components/Gastronomy.vue"),
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () => import("../../views/Cities/components/Shopping.vue"),
  },
  {
    path: "/tourism",
    name: "Tourism",
    component: () => import("../../views/Cities/components/Tourism.vue"),
  },
  //City Details
  {
    path: "/cities/:id",
    name: "SingleCity",
    component: () => import("../../views/Cities/Details/City.vue"),
  },
  {
    path: "/cities/:name/Gastronomy",
    name: "CityGastronomy",
    component: () => import("../../views/Cities/Details/Gastronomy.vue"),
  },
  {
    path: "/cities/:id/Experiences",
    name: "CityExperiences",
    component: () => import("../../views/Cities/Details/Experiences.vue"),
  },
  {
    path: "/cities/:id/Places",
    name: "CityPlaces",
    component: () => import("../../views/Cities/Details/Places.vue"),
  },
];
