<template>
  <div>
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="imgPath" v-model="imgPath" />
    <input type="text" placeholder="description" v-model="description" />
    <input type="number" placeholder="rating" v-model="rating" />
    <button @click.prevent="addCity">
      Add
    </button>
  </div>
</template>

<script>
import "firebase/auth";
import db from "../../../firebase/firebaseInit";

export default {
  data() {
    return {
      city: {
        description: "",
        imgPath: "",
        name: "",
        rating: null,
      },
    };
  },
  methods: {
    async addCity() {
      db.collection("cities").add({
        description: this.description,
        imgPath: this.imgPath,
        name: this.name,
        rating: this.rating,
      });
      return;
    },
  },
};
</script>

<style></style>
