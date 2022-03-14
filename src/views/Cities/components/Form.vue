<template>
  <div class="createPost">
    <v-btn class="primary-btn" tile @click="onGastronomy">
      <v-icon left>
        mdi-plus
      </v-icon>
      Create Gastronomy
    </v-btn>
    <form action="" @submit.prevent="editCity">
      <div class="container">
        <input
          required
          type="text"
          placeholder="Enter city name"
          v-model="name"
        />
        <textarea v-model="description" />
        <input
          required
          type="number"
          placeholder="Enter city rating"
          v-model="rating"
        />
        <button type="submit">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script>
import "firebase/auth";

export default {
  data() {
    return {
      id: null,
      description: "",
      name: "",
      rating: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCity();
    this.description = this.currentCity.description;
    this.name = this.currentCity.name;
    this.rating = this.currentCity.rating;
  },
  computed: {
    currentCity() {
      return this.$store.state.cities.city;
    },
  },
  methods: {
    getCity() {
      this.$store.dispatch("getCity", this.id);
    },
    onGastronomy() {
      this.$router.push({ name: "CityGastronomyForm", id: this.id });
    },
    editCity() {
      const updatedCity = {
        description: this.description,
        name: this.name,
        rating: this.rating,
      };
      this.$store
        .dispatch("editCity", { city: updatedCity, id: this.id })
        .then(() => {
          this.$store.dispatch("getCity", this.id);
          this.$router.push({ name: "Cities" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 900px) {
  .createPost {
    justify-content: center !important;
    margin-right: 0%;
    margin-left: 0%;
  }
}

.createPost {
  @media (max-width: 900px) {
    .container {
      width: 100% !important;
      flex-wrap: nowrap;
      justify-content: center;
    }
  }

  margin-right: 5%;
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 15px;

  .container {
    padding: 15px;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 160%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      border: 1px solid black;
      font-size: 20px;
      height: 20%;
      width: auto;
      padding: 15px;
      margin-bottom: 3%;
      margin-top: 3%;
    }

    textarea {
      font-size: 20px;
      height: 20%;
      width: auto;
      padding: 15px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 3px solid black;
      margin-bottom: 3%;
      margin-top: 3%;
    }
    button {
      background-color: black;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin-bottom: 3%;
      margin-top: 3%;
    }
  }
}
</style>
