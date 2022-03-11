<!--<template>
	<div class="addCity">
		<input type="text" placeholder="Name" v-model="name" />
		<input type="text" placeholder="Image Path" v-model="imgPath" />
		<input type="text" placeholder="Description" v-model="description" />
		<input type="number" placeholder="Rating" v-model="rating" />
		<button @click.prevent="addCity">
			Add
		</button>
	</div>
</template>-->
<template>
	<div class="createPost">
		<form action="" @submit.prevent="addCity">
			<div class="container">
				<input
					required
					type="text"
					placeholder="Enter city name"
					v-model="city.name"
				/>
				<!-- <input
					required
					type="text"
					placeholder="imgPath"
					v-model="city.imgPath"
				/> -->
				<textarea v-model="city.description" />
				<input
					required
					type="number"
					placeholder="Enter city rating"
					v-model="city.rating"
				/>
				<button type="submit">Continue</button>
			</div>
		</form>
	</div>
</template>

<script>
import "firebase/auth";
// import db from "../../../firebase/firebaseInit";
import createCity from "../../../utility/City/createCity";

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
			try {
				const newCity = await createCity({
					...this.city,
					// name: this.name,
					// imgPath: this.imgPath,
					// description: this.description,
					// rating: this.rating,
				});
				this.$router.push({
					name: "ViewCity",
					params: { id: newCity._id },
				});
				// console.log(newCity);
			} catch (err) {
				console.log(`Errori te AddCity ${err}`);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
// .addCity {
// 	margin-left: 20%;
// 	margin-right: 20%;
// 	height: auto;
// 	width: 60%;
// 	padding: 20px;
// 	margin-top: 3%;
// 	margin-bottom: 3%;
// 	display: flex;
// 	flex-direction: column;

// 	input {
// 		width: 40%;
// 		margin-right: 30%;
// 		margin-left: 30%;
// 		padding: 15px;
// 		margin-top: 2%;
// 		margin-bottom: 2%;
// 	}

// 	button {
// 		margin-right: 30%;
// 		margin-left: 30%;
// 		padding: 15px;
// 		margin-top: 2%;
// 		margin-bottom: 2%;
// 	}
// }

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
