export default [
	{
		path: "/Posts",
		name: "Posts",
		component: () => import("../../views/Posts/Posts.vue"),
	},
	{
		path: "/posts/create",
		name: "CreatePost",
		component: () => import("../../views/Posts/Create/CreatePost.vue"),
	},
	{
		path: "/view/:id",
		name: "View",
		component: () => import("../../views/Posts/View.vue"),
	},
];
