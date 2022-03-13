import api from "@/libs/api";

export default {
	state: {
		posts: [],
		post: {},
		loading: false,
		blogPhotoName: "",
		blogPhotoFileURL: "",
	},
	getters: {
		postList(state) {
			return state.posts;
		},
	},
	mutations: {
		FILE_NAME_CHANGE(state, payload) {
			state.blogPhotoName = payload;
		},
		CREATE_FILE_URL(state, payload) {
			state.blogPhotoFileURL = payload;
		},
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
		SET_LIST(state, list) {
			state.posts = list;
		},
		REMOVE_POST(state, id) {
			state.posts = state.posts.filter((c) => c.id !== id);
		},
		EDIT_POST(state, payload) {
			state.currentPost = payload;
		},
	},
	actions: {
		// fetchPost({ commit }, list) {
		// 	commit("SET_LIST", list);
		// },
		fetchPost({ commit }) {
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
		removePost({ commit }, postId) {
			commit("SET_LOADING", true);
			return new Promise((resolve, reject) => {
				api("localhost")
					.delete(`/posts/delete/${postId}`)
					.then((response) => {
						commit("REMOVE_POST", postId);
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
		editPost({ commit }, post) {
			commit("SET_LOADING", true);
			return new Promise((resolve, reject) => {
				api("localhost")
					.put(`/posts/update/${post._id}`)
					.then((response) => {
						console.log(response);
						commit("EDIT_POST", response.data);
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
