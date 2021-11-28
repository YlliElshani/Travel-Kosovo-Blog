import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:[
      {blogTitle:"Blog Title #1",blogCoverPhoto:"stack-1",blogDate:"May 1st 2021"},
      {blogTitle:"Blog Title #2",blogCoverPhoto:"stack-2",blogDate:"May 14th 2021"},
      {blogTitle:"Blog Title #3",blogCoverPhoto:"stack-3",blogDate:"May 2nd 2021"},
      {blogTitle:"Blog Title #4",blogCoverPhoto:"stack-4",blogDate:"May 3th 2021"},
    ],
    editPost:null,
    user:null,
    profileEmail:null,
    profileFirstName:null,
    profileLastName:null,
    profileUserName:null,
    profileId:null,
    profileInitials:null
  },
  mutations: {
    toggleEditPost(state,payload){
      state.editPost=payload
      console.log(state.editPost)
    },
    setProfileInfo(state,doc){
      state.profileId=doc.id;
      state.profileEmail=doc.data().email;
      state.profileFirstName=doc.data().firstName;
      state.profileLastName=doc.data().lastName;
      state.profileUsername=doc.data().username
    },

    updateUser(state,payload){
      state.user=payload;
    },

    setProfileInitials(state){
      state.profileInitials=
      state.profileFirstName.match(/(\b\S)?/g).join("")+state.profileLastName.match(/(\b\S)?/g);
    },
    changeFirstName(state,payload){
      state.profileFirstName=payload;
    },
    changeLastName(state,payload){
      state.profileLastName=payload;
    },
    changeUsername(state,payload){
      state.profileUserName=payload;
    },
  },
  actions: {
    async getCurrentUser({commit}){
      const dataBase= await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults= await dataBase.get();
      commit("setProfileInfo",dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },
  },
  modules: {
  }
})
