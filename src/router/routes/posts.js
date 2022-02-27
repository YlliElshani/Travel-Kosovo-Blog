export default[
    {
    path: "/blog",
    name: "Blog",
    component: () => import('../../views/Posts/Blogs.vue'),
    },
    {
    path: "/CreatePost",
    name: "CreatePost",
    component: () => import('../../views/Posts/Create/CreatePost.vue'),
    },
]