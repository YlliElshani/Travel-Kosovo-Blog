import api from "@/libs/api";

export default {
	state: {
		posts: [],
		post: {},
		loading: false,
	},
	getters: {},
	mutations: {
		SET_LOADING(state, payload) {
			state.fetchingPosts = payload;
		},
		SET_POSTS(state, payload) {
			state.posts = payload;
		},
		SET_CURRENT_POST(state, payload) {
			state.post = payload;
			console.log(state.post);
		},
	},
	actions: {
		fetchPosts({ commit }) {
			commit("SET_LOADING", true);
			return new Promise((resolve, reject) => {
				api("localhost")
					.get(`/posts/`)
					.then((response) => {
						commit("SET_POSTS", response.data);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
						commit("SET_LOADING", false);
					});
			});
		},
		getPost({ commit }, postId) {
			commit("SET_LOADING", true);
			return new Promise((resolve, reject) => {
				api("localhost")
					.get(`/posts/${postId}`)
					.then((response) => {
						commit("SET_CURRENT_POST", response.data);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
						console.log(this.state.currentPost);
						commit("SET_LOADING", false);
					});
			});
		},
		setPosts({ commit }, post) {
			commit("SET_LOADING", true);
			return new Promise((resolve, reject) => {
				api("localhost")
					.post(`/posts/create`, post)
					.then((response) => {
						commit("SET_POSTS", post);
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					})
					.finally(() => {
						commit("SET_LOADING", false);
					});
			});
		},
	},
};
