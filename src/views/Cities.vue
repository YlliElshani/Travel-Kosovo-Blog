<template>
  <div class="container citiesContainer">
    <h1 style="text-align: center">Cities</h1>
    <div class="cardsWrapper">
      <b-card
        v-for="city in cities"
        :key="city.name"
        :title="city.name"
        :img-src="require('../assets/blogPhotos/' + city.imgPath + '.jpg')"
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

        <router-link :to="{ name: 'SingleCity', params: { id: city.name } }"
          ><b-button variant="primary"
            >Visit {{ city.name }}</b-button
          ></router-link
        >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
    };
  },
  created() {
    this.cities = this.$store.state.cities;
  },
  methods: {
    generateRating() {
      return Math.floor(Math.random() * (5 - 1 + 1)) + 1; //multiply to generate random number between 0, 10
    },
  },
  name: "Cities",
  components: {},
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
