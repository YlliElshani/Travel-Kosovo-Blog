<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <div v-if="isLoading" id="loadedClass">
        <div class="logoSet">
          <transition name="slide" mode="out-in" appear>
            <Logo />
          </transition>
        </div>
      </div>
    </transition>
    <app-navigation v-if="!isLoading"></app-navigation>
    <router-view v-if="!isLoading"></router-view>
    <app-footer v-if="!isLoading"></app-footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";
import Logo from "../src/assets/Logo.svg";

export default {
  name: "app",
  components: {
    appNavigation: Navigation,
    appFooter: Footer,
    Logo,
  },
  data() {
    return {
      loading: true,
      navigation: null,
    };
  },
  computed: {
    isLoading() {
      return this.loading;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
    this.checkRoute();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
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
header {
  border-bottom: 2px solid #1a4531 !important;
}
body {
  background-color: #faf7f1 !important;
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
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:focus {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}
#loadedClass {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #333;
  height: 100vh;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
