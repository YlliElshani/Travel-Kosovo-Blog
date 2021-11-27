<template>
  <header>
    <nav class="container-fluid navbar" v-if="!mobileNav">
      <div class="nav-links">
        <router-link class="link" :to="{ name: 'Cities' }">Cities</router-link>
        <router-link class="link" :to="{ name: 'Gastronomy' }">Gastronomy</router-link>
        <router-link class="link" :to="{ name: 'Tourism' }">Toursim</router-link>
        <router-link class="link" :to="{ name: 'Shopping' }">Shopping</router-link>
      </div>
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"><Logo /></router-link>
      </div>
      <div class="nav-links">
        <router-link class="link" :to="{ name: 'AboutUs' }">About Us</router-link>
        <router-link class="link" :to="{ name: 'Home' }">Profile</router-link>
        <router-link class="link" :to="{ name: 'Home' }">Login</router-link>
        <router-link class="link" :to="{ name: 'Home' }">Register</router-link>
      </div>
    </nav>
    <transition name="row mobile-nav" v-if="mobileNav">
      <div class="navbar navbar-mobile">
        <menuIcon style="width: 30px" class="mobileMenuIcon" />
        <div class="branding">
          <router-link class="header" :to="{ name: Home }"
            ><Logo
          /></router-link>
        </div>
        <router-link class="link" :to="{ name: 'Cities' }">Cities</router-link>
        <router-link class="link" :to="{ name: 'Gastronomy' }">Gastronomy</router-link>
        <router-link class="link" :to="{ name: 'Tourism' }">Toursim</router-link>
        <router-link class="link" :to="{ name: 'Shopping' }">Shopping</router-link>
        <router-link class="link" :to="{ name: 'Home' }">Login</router-link>
        <router-link class="link" :to="{ name: 'Home' }">Register</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import Logo from "../assets/Logo.svg";

export default {
  name: "navigation",
  components: {
    menuIcon,
    Logo,
  },
  data() {
    return {
      mobileNav: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_variables.scss";

header {
  background-color: #fff;
  padding: 0 0.016rem;
  z-index: 99;

  .navbar {
    background-color: $secondary-color;
    border-bottom: 0.25rem solid $primary-color;
    padding: 1rem 3rem;
    display: flex;
    flex-wrap: wrap;

    .nav-links {
      display: flex;
      align-content: center;

      .link {
        margin: 0 1rem;
      }
    }
  }

  .navbar-mobile {
    background-color: $primary-light-color;
    display: flex;
    flex-wrap: wrap;

    .mobileMenuIcon {
      color: $secondary-color;
      cursor: pointer;
    }
    .link {
      color: white;

      &:hover {
        border-bottom: 4px solid $secondary-color;
        transition: 0.3s all ease;
      }
    }
  }
}
</style>