export default [
  {
    path: "/Login",
    name: "Login",
    component: () => import("../../views/Users/Login/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../../views/Users/Register/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../../views/Users/Profile/ForgotPassword.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../../views/Users/Profile/Profile.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../../views/Users/Admin/Admin.vue"),
  },
];
