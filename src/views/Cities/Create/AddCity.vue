<template>
	<div class="addCity">
		<input type="text" placeholder="Name" v-model="name" />
		<input type="text" placeholder="Image Path" v-model="imgPath" />
		<input type="text" placeholder="Description" v-model="description" />
		<input type="number" placeholder="Rating" v-model="rating" />
		<button @click.prevent="addCity">
			Add
		</button>
	</div>
</template>

<script>
import "firebase/auth";
// import db from "../../../firebase/firebaseInit";
import createCity from "@/utility/City/createCity.js";

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
			const newCity = await createCity({
				/*...this.city */
				name: this.name,
				imgPath: this.imgPath,
				description: this.description,
				rating: this.rating,
			});
			this.$router.push({ name: "Cities", params: { id: newCity._id } });
		},
	},
};
</script>

<style lang="scss" scoped>

	.addCity{
		margin-left: 20%;
		margin-right: 20%;
		height: auto;
		width: 60%;
		padding: 20px;
		margin-top: 3%;
		margin-bottom: 3%;
		display: flex;
		flex-direction: column;

			input{
				width:40%;
				margin-right: 30%;
				margin-left: 30%;
				padding: 15px;
				margin-top: 2%;
				margin-bottom: 2%;
			}

			button{
				margin-right: 30%;
				margin-left: 30%;
				padding: 15px;
				margin-top: 2%;
				margin-bottom: 2%;
			}
	}

</style>
