<template>
	<section>
		<div v-if="this.city" class="row justify-content-center">
			<div class="col-5 col-md-8 col-lg-8">
				<div class="flex">
					<h1>Name: {{ this.city.name }}</h1>

					<h1>Description: {{ this.city.description }}</h1>

					<h1>Ratting: {{ this.city.rating }}</h1>
				</div>
				<DropZoneCity
					:cityId="this.$route.params.id"
					:initialFilesCity="city.files"
				/>
			</div>
			<router-link class="goToCities" :to="{ name: 'Cities' }">
				Go to Cities
			</router-link>
		</div>
	</section>
	<!-- <div>
		<h1>Hello</h1>
	</div> -->
</template>

<script>
// import getPost from "../../utility/Posts/getPost";
import DropZoneCity from "@/components/DropZoneCity";
import getCity from "../../utility/City/getCity";

export default {
	components: {
		DropZoneCity,
	},
	created() {
		this.fetchCity();
		// this.setCity();
	},
	data() {
		return {
			city: null,
		};
	},
	methods: {
		async fetchCity() {
			// this.$store.dispatch("fetchCities");
			this.city = await getCity(this.$route.params.id);
		},
		// getCity() {
		// 	this.$store.dispatch("getCity", this.$route.params.id);
		// },
	},
};
</script>

<style lang="scss" scoped>
.goToCities {
	text-decoration: none;
	margin-left: 20%;
	margin-right: 60%;
	width: 20%;
	color: black;
	font-size: 20px;
	text-transform: bold;
}
</style>
