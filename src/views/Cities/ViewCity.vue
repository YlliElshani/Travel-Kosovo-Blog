<template>
	<body>
		<div v-if="this.city" class="cityItems">
				<div>
					<label>City Name:</label>
					<h1>{{ this.city.name }}</h1>

					<label>City description:</label>
					<h1>{{ this.city.description }}</h1>

					<label>City rating:</label>
					<h1>{{ this.city.rating }}</h1>
					<div>
						<DropZoneCity
							:cityId="this.$route.params.id"
							:initialFilesCity="city.files"
						/>
					</div>
					<div class="routerLink">
					<router-link class="goToCities" :to="{ name: 'Cities' }">
						Continue to Cities
					</router-link>
					</div>
				</div>
		</div>
	</body>
</template>

<script>
import DropZoneCity from "@/components/DropZoneCity";
import getCity from "../../utility/City/getCity";

export default {
	components: {
		DropZoneCity,
	},
	created() {
		this.fetchCity();
	},
	data() {
		return {
			city: null,
		};
	},
	methods: {
		async fetchCity() {
			this.city = await getCity(this.$route.params.id);
		},
	},
};
</script>

<style lang="scss" scoped>
.cityItems{
	border: 3px solid #1B1B1B;
	border-radius: 25px;
	margin-left: 10%;
	margin-right: 10%;
	margin-top: 5%;
	width: 80%;
	padding: 25px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	.routerLink{
		margin-right: 10%;
		margin-left: 10%;
		width: 90%;
		padding: 15px;
		
			.goToCities {
				text-decoration: none;
				width: 100%;
				color: black;
				font-size: 25px;
				text-transform: bold;
			}
	}

}
</style>
