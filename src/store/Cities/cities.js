import api from "@/libs/api";

export default {
  state: {
    cities: [],
    city: {},
    loading: false,
    fetchingCity: false,
  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_GETTING_CITY(state, payload) {
      state.fetchingCity = payload;
    },
    SET_CITIES(state, payload) {
      state.cities = payload;
    },
    SET_CURRENT_CITY(state, payload) {
      state.city = payload;
    },
    REMOVE_CITY(state, name) {
      state.cities = state.cities.filter((c) => c.name !== name);
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
    getCity({ commit }, cityName) {
      commit("SET_GETTING_CITY", true);
      return new Promise((resolve, reject) => {
        api("localhost")
          .get(`/cities/${cityName}`)
          .then((response) => {
            commit("SET_CURRENT_CITY", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            commit("SET_GETTING_CITY", false);
          });
      });
    },
    removeCity({ commit }, cityName) {
      commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        api("localhost")
          .delete(`/cities/delete/${cityName}`)
          .then((response) => {
            commit("REMOVE_CITY", cityName);
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
