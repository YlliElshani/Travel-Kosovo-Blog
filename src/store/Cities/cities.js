import api from "@/libs/api";

export default {
  state: {
    cities: [],
    city: {},
    loading: false,
  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.fetchingCities = payload;
    },
    SET_CITIES(state, payload) {
      state.cities = payload;
    },
    SET_CURRENT_CITY(state, payload) {
      state.city = payload;
      console.log(state.city)
    },
  },
  actions: {
    fetchCities({ commit }) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        api("localhost")
          .get(`/cities/`)
          .then((response) => {
            commit("SET_CITIES", response.data);
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
    getCity({ commit }, cityId) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        api("localhost")
          .get(`/cities/${cityId}`)
          .then((response) => {
            commit("SET_CURRENT_CITY", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            console.log(this.state.currentCity)
            commit("SET_LOADING", false);
          });
      });
    },
    setCities({ commit }, city) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        api("localhost")
          .post(`/cities/create`, city)
          .then((response) => {
            commit("SET_CITIES", city);
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
