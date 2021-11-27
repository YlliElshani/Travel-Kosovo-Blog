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

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
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
</style>
