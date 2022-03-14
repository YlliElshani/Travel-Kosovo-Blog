import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

//Routes
import base from "./routes/index";
import cities from "./routes/cities";
import posts from "./routes/posts";
import users from "./routes/users";

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    ...base,
    ...cities,
    ...posts,
    ...users,
    {
      path: "/login",
      name: "auth-login",
      component: () => import("@/views/Users/Login/Login.vue"),
      meta: {
        isPublic: true,
        layout: "full",
        resource: "Auth",
        redirectIfLoggedIn: true,
      },
    },
  ],
});

export default router;
