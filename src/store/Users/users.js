import api from "@/libs/api";

export default {
  state: {
    loading: true,
    loggedIn: false,
    isAdmin: false,
    user: {},
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value;
    },
    SET_USER(state, userData) {
      state.user = userData;
    },
    SET_PROFILE_INFO(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
    SET_PROFILE_INITIALS(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g);
    },
    SET_FIRST_NAME(state, payload) {
      state.profileFirstName = payload;
    },
    SET_LAST_NAME(state, payload) {
      state.profileLastName = payload;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_USER", user ? user : null);
      commit("SET_LOGGED_IN", user !== null);
    },
    createUser({ commit }, value) {
      commit("SET_LOADING", true);

      commit("SET_USER", value ? value : null);
      return new Promise((resolve, reject) => {
        api("localhost")
          .post(`/register`, value)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            commit("SET_LOADING", true);
          });
      });
    },
    // 	async updateUserSettings({ commit, state }) {
    // 		const dataBase = await db.collection("users").doc(state.profileId);
    // 		await dataBase.update({
    // 			firstName: state.profileFirstName,
    // 			lastName: state.profileLastName,
    // 			username: state.profileUserName,
    // 		});
    // 		commit("setProfileInitials");
    // 	},
    // 	async getCurrentUser({ commit }) {
    // 		const dataBase = await db
    // 			.collection("users")
    // 			.doc(firebase.auth().currentUser.uid);
    // 		const dbResults = await dataBase.get();
    // 		commit("setProfileInfo", dbResults);
    // 		commit("setProfileInitials");
    // 	},
  },
};
