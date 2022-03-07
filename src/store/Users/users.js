import api from "@/libs/api";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../../firebase/firebaseInit";

export default {
  state: {
    loading: true,
    loggedIn: false,
    isAdmin: false,
    currentUser: {
      profileId: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUserName: null,
      profileInitials: null,
      roles: null,
    },
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value;
    },
    SET_PROFILE_INFO(state, doc) {
      state.currentUser.profileId = doc.id;
      state.currentUser.profileEmail = doc.data().email;
      state.currentUser.profileFirstName = doc.data().firstName;
      state.currentUser.profileLastName = doc.data().lastName;
      state.currentUser.profileUserName = doc.data().username;
      state.currentUser.roles = doc.data().roles;
    },
    SET_ADMIN(state, payload) {
      const adminRole = payload.includes(1)
      state.isAdmin = adminRole;
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
    SIGN_USER_OUT(state) {
      state.currentUser.profileId = null;
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
    loginUser({ commit, dispatch }, user) {
      commit("SET_LOADING", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => dispatch("getCurrentUser"));
      commit("SET_LOADING", false);
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
    async getCurrentUser({ commit }) {
      commit("SET_LOADING", true);
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("SET_PROFILE_INFO", dbResults);
      commit("SET_LOGGED_IN", true);
      commit("SET_ADMIN", dbResults.data().roles);
      commit("SET_LOADING", false);
      // commit("setProfileInitials");
      // const token = await user.getIdTokenResult();
      // const admin = await token.claims.admin;
      // commit("setProfileAdmin", admin);
    },
    signUserOut({ commit }) {
      commit("SET_LOADING", true);
      commit("SIGN_USER_OUT");
      commit("SET_LOADING", false);
    },
    // setProfileInfo(state, doc) {
    //   state.currentUser.profileId = doc.id;
    //   state.currentUser.profileEmail = doc.data().email;
    //   state.currentUser.profileFirstName = doc.data().firstName;
    //   state.currentUser.profileLastName = doc.data().lastName;
    //   state.currentUser.profileUserName = doc.data().username;
    //   console.log(state.currentUser);
    // },
  },
};
