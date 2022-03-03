<template>
  <div class="container citiesContainer">
    <h1 style="text-align: center">Cities</h1>
    <div>
      <router-link :to="{ name: 'CreateCity' }">
        <b-button variant="primary">Add City</b-button>
      </router-link>
    </div>
    <div v-if="loadingCities">
      <loader />
    </div>
    <div v-else class="cardsWrapper">
      <b-card
        v-for="city in cities"
        :key="city.name"
        :title="city.name"
        img-alt="Image"
        img-top
        tag="article"
        class="singleCard"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <b-form-rating
            id="rating-sm"
            :value="city.rating"
            variant="warning"
            readonly
            size="lg"
          ></b-form-rating>
        </b-card-text>

        <router-link :to="{ name: 'SingleCity', params: { name: city.name } }"
          ><b-button variant="primary"
            >Visit {{ city.name }}</b-button
          ></router-link
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import loader from "../../components/Loading.vue";
export default {
  data() {
    return {};
  },
  components: {
    loader,
  },
  created() {
    this.fetchCities();
    this.setCity();
  },
  computed: {
    loadingCities() {
      return this.$store.state.cities.loading;
    },
    cities() {
      return this.$store.state.cities.cities;
    },
  },
  methods: {
    fetchCities() {
      this.$store.dispatch("fetchCities");
    },
    setCity() {
      this.$store.dispatch("setCity");
    },
    generateRating() {
      return Math.floor(Math.random() * (5 - 1 + 1)) + 1; //multiply to generate random number between 0, 10
    },
  },
  name: "Cities",
};
</script>

<style lang="scss" scoped>
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
