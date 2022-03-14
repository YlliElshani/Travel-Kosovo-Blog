<template>
	<body>
		<div class="container">
			<router-link v-if="isAdmin" :to="{ name: 'CreateCity' }">
				<b-button variant="primary">Add City</b-button>
			</router-link>
			<div class="row">
				<CardCity v-for="entry in cityList" :key="entry._id" :city="entry" />
			</div>
		</div>
	</body>
</template>

<script>
import CardCity from "../../components/CardCity.vue";
import { mapGetters } from "vuex";
import getCityList from "../../utility/City/getCityList";
export default {
	data() {
		return {};
	},
	components: {
		CardCity,
	},
	created() {
		this.fetchCity();
	},
	computed: {
		loadingCities() {
			return this.$store.state.cities.loading;
		},

		isAdmin() {
		return this.$store.state.users.isAdmin;
		},

		isLoggedIn(){
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
		async fetchCity() {
			const result = await getCityList();
			this.$store.dispatch("fetchCity", result);
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
