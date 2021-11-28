<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
data() {
    return {
      navigation:null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.$store.commit("updateUser",user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    })
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute(){
      if(this.$route.name==="Login" || this.$route.name==="Register" || this.$route.name==="ForgotPassword")
      {
        this.navigation=true;
        return;
      }
      this.navigation=false;
    }
  },
  watch: {
    $route(){
      this.checkRoute();
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import "./assets/sass/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $primary-font, sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: $primary-color;
  font-family: $secondary-font;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem;
  transition: 0.3s all ease;
  border-bottom: 4px solid transparent;

  &:hover {
    color: $primary-light-color;
    border-bottom: 4px solid $primary-light-color;
    transition: 0.3s all ease;
  }
}

.link-light {
  color: $primary-light-color;
}

button,
.router-button{
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding:12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus{
    outline: none;
  }

  &:focus{
    background-color: rgba(48,48,48,0.7);
  }
}

.button-light{
  background-color: transparent;
  border:2px solid #fff;
  color: #fff;
}

.button-inactive{
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128,128,128,0.5) !important;
}
</style>
