import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Cities from "../views/Cities.vue";
import City from "../views/City.vue";
import Gastronomy from "../views/Gastronomy.vue";
import Tourism from "../views/Tourism.vue";
import Shopping from "../views/Shopping.vue";
import AboutUs from "../views/AboutUs.vue";
import Regsiter from "../views/Register.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import CreatePost from "../views/CreatePost.vue";
import CityGastronomy from "../views/City/Gastronomy.vue";
import CityExperiences from "../views/City/Experiences.vue";
import CityPlaces from "../views/City/Places.vue";

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
		path: "/aboutus",
		name: "AboutUs",
		component: AboutUs,
	},
	{
		path: "/cities/:id",
		name: "SingleCity",
		component: City,
	},
	{
		path: "/cities/:id/Gastronomy",
		name: "CityGastronomy",
		component: CityGastronomy,
	},
	{
		path: "/cities/:id/Experiences",
		name: "CityExperiences",
		component: CityExperiences,
	},
	{
		path: "/cities/:id/Places",
		name: "CityPlaces",
		component: CityPlaces,
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
	{
		path: "/Login",
		name: "Login",
		component: Login,
	},
	{
		path: "/Register",
		name: "Register",
		component: Regsiter,
	},
	{
		path: "/forgot-password",
		name: "ForgotPassword",
		component: ForgotPassword,
	},
	{
		path: "/Profile",
		name: "Profile",
		component: Profile,
	},
	{
		path: "/Admin",
		name: "Admin",
		component: Profile,
	},
	{
		path: "/CreatePost",
		name: "CreatePost",
		component: CreatePost,
	},
	{
		path: "/map",
		name: "KosovaPath",
		component: () =>
			import(
				/* webpackChunkName: "mapPath" */ "../components/KosovaMap/MapPath.vue"
			),
	},
];

const router = new VueRouter({
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
export default router;
