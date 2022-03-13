<template>
  <div class="container-fluid">
    <div>
      <v-btn class="primary-btn" tile @click="createCity">
        <v-icon left>
          mdi-plus
        </v-icon>
        Create City
      </v-btn>
    </div>
    <div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="cities"
          item-key="name"
          loading
          loading-text="Loading data... Please wait"
          :search="search"
        >
          <template v-slot:[`item.rating`]="{ item }">
            <v-chip class="ma-2" color="success" outlined>
              <v-icon left>
                mdi-star
              </v-icon>
              {{ item.rating }}
            </v-chip>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn class="success-btn" tile @click="editCity(item._id)">
              <v-icon left>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
            <v-btn class="delete-btn" tile @click="deleteCity(item.name)">
              <v-icon left>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitiesDashboard",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Description", value: "description" },
        { text: "Rating", value: "rating" },
        { text: "Actions", sortable: false, value: "actions" },
      ],
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities.cities;
    },
  },
  created() {
    this.getCities();
    this.cities = this.computed;
  },
  methods: {
    getCities() {
      this.$store.dispatch("getCities");
    },
    createCity() {
      this.$router.push({ name: "CreateCity" });
    },
    deleteCity(cityName) {
      this.$store.dispatch("removeCity", cityName);
    },
    editCity(cityId) {
      console.log(cityId);
    },
  },
};
</script>

<style>
.primary-btn {
  color: white !important;
  margin-bottom: 1rem;
  background-color: rgb(0, 110, 255) !important;
}
.success-btn {
  color: white !important;
  background-color: green !important;
}
.delete-btn {
  color: white !important;
  background-color: red !important;
}
</style>
