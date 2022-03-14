<template>
  <body>
    <div class="container">
      <button v-if="isAdmin">
        <b-button variant="primary">
          <router-link class="btnLink" :to="{ name: 'CreateCity' }">Add a city</router-link>
        </b-button>
      </button>
      <div class="row">
        <CardCity v-for="entry in cityList" :key="entry._id" :city="entry" />
      </div>
    </div>
  </body>
</template>

<script>
import CardCity from "../../components/CardCity.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CardCity,
  },
  created() {
    this.getCities();
  },
  computed: {
    loadingCities() {
      return this.$store.state.cities.loading;
    },

    isAdmin() {
      return this.$store.state.users.isAdmin;
    },

    isLoggedIn() {
      return this.$store.state.users.isLoggedIn;
    },

    ...mapGetters({
      cityList: "cityList",
    }),
    cities() {
      return this.$store.state.cities.cities;
    },
  },
  methods: {
    getCities() {
      this.$store.dispatch("getCities");
    },
    removeCity(cityName) {
      this.$store.dispatch("removeCity", cityName);
    },
    generateRating() {
      return Math.floor(Math.random() * (5 - 1 + 1)) + 1; //multiply to generate random number between 0, 10
    },
  },
  name: "Cities",
};
</script>

<style lang="scss" scoped>
.dark button {
  background-color: #3a3a3a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.btnLink {
  padding: 15px;
  text-decoration: none;
  color: black;
}

.cardsWrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .singleCard {
    margin: 0.1rem;
    max-width: 20rem;
    img {
      min-height: 12rem;
      max-height: 12rem;
      object-fit: cover;
    }
  }
}
</style>
