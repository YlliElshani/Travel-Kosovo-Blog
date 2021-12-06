import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [
      {
        name: "Artanë",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Besianë",
        rating: 2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
        imgPath: "default",
      },
      {
        name: "Burim",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Dardanë",
        rating: 1,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Deçan",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Dragash",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Drenas",
        rating: 4,
        imgPath: "default",
      },
      {
        name: "Ferizaj",
        rating: 5,
        imgPath: "ferizaj",
        description:
          "With breathtaking views, exceptional design inspired by nature and sumptuous amenities – our premium mountain suites offer a memorable experience unlike anywhere else in Greece",
      },
      {
        name: "Fushë Kosovë",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Gjakovë",
        rating: 5,
        imgPath: "gjakovë",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Gjilan",
        rating: 5,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Kastriot",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },

      {
        name: "Kaçanik",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Klinë",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Leposaviq",
        rating: 1,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Lipjan",
        rating: 2,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Malishevë",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Mitrovicë",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Pejë",
        rating: 5,
        imgPath: "pejë",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Prishtinë",
        rating: 5,
        imgPath: "prishtinë",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Prizren",
        rating: 5,
        imgPath: "prizren",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Rahovec",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Skenderaj",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Shtërpcë",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Shtime",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Therandë",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Viti",
        rating: 4,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Vushtrri",
        rating: 3,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Zubin Potok",
        rating: 2,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
      {
        name: "Zveçan",
        rating: 1,
        imgPath: "default",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis fringilla augue, in imperdiet odio finibus ac. Etiam id nibh mi. Aenean posuere turpis nec elit elementum, ac euismod lacus ultricies. Suspendisse suscipit mauris sit amet porttitor bibendum. Fusce id diam a felis venenatis interdum. Donec iaculis finibus commodo. Proin.",
      },
    ],
    sampleBlogCards: [
      {
        blogTitle: "Blog Title #1",
        blogCoverPhoto: "stack-1",
        blogDate: "May 1st 2021",
      },
      {
        blogTitle: "Blog Title #2",
        blogCoverPhoto: "stack-2",
        blogDate: "May 14th 2021",
      },
      {
        blogTitle: "Blog Title #3",
        blogCoverPhoto: "stack-3",
        blogDate: "May 2nd 2021",
      },
      {
        blogTitle: "Blog Title #4",
        blogCoverPhoto: "stack-4",
        blogDate: "May 3th 2021",
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },

    updateUser(state, payload) {
      state.user = payload;
    },

    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g);
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },
  },
  modules: {},
});
