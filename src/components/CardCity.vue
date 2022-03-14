<template>
	<body class="col-lg-4 mt-4 col-md-6 col-sm-12">
		<div class="card">
			<img
				v-if="src"
				:src="src"
				class="card-img-top"
				style="max-height: 150px"
			/>
			<div class="card">
				<h5 class="card-header">{{ city.name }}</h5>
				<h5 class="card-body">{{ city.description }}</h5>
				<h5 class="card-footer">{{ city.rating }}</h5>		
				<div class="btns">
					<router-link
					class="btnLink"
					:to="{ name: 'SingleCity', params: { id: city._id } }"
					>View</router-link
				>
				<button
					type="button"
					class="btnDel"
					@click.prevent="removeCity(city.name)"
				>
					Delete
				</button>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
export default {
	props: {
		city: Object,
	},
	computed: {
		src() {
			const filename = this.city.files?.split(";")[0];

			return filename ? `http://localhost:1000/static/${filename}` : null;
		},
		cities() {
			return this.$store.state.cities.cities;
		},
	},
	methods: {
		removeCity(cityName) {
			this.$store.dispatch("removeCity", cityName);
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	h2 {
		text-align: center;
		align-self: center;
	}
}

	.card{
		padding: 20px;


	.btns {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 15px;
		width: 30%;

		.btnLink {
			padding: 15px;
			text-decoration: none;
			color: black;
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
			margin-left: 5%;
		}

		li:first-child{
			font-size: 30px;
		}
	}
	}
	
</style>
