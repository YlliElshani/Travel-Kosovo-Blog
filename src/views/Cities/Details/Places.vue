<template>
	<div class="city-container">
		<div v-if="loading">
			<Loading />
		</div>
		<div class="container-fluid cityContainer">
			<div class="cityHero">
				<div class="imgShadow">
					<img
						:src="require('../../../assets/blogPhotos/placesFull.jpg')"
						:alt="currentCity._id"
						:onerror="replaceByDefault"
						class="cityMainImage"
					/>
				</div>
				<h1 class="cityName">Places</h1>
			</div>
			<div class="descriptionContainer">
				<h2>
					Immerse yourself in breathtaking views whilst breathing in the
					invigorating mountain air of {{ cityName }}'s sensational infinity
					pools.
				</h2>
			</div>
			<div class="container-fluid citySubmenu">
				<h2>Visit {{ cityName }}</h2>
			</div>
			<div class="cityMainContent">
				<div class="cityTopPlacesContainer">
					<!-- 1 -->
					<div class="col col-lg-5 col-12 cityTopPlacesBox">
						<div class="container boxContainer">
							<h2>{{ cityName }}'s top Places!</h2>
							<hr />
							<h4>
								Immerse yourself in breathtaking views whilst breathing in the
								invigorating mountain air of {{ cityName }}'s sensational
								infinity pools.
							</h4>
							<p>Location: {{ cityName }}</p>
							<button class="btn seeMoreBtn">See More</button>
						</div>
					</div>
					<div class="col col-lg-5 col-12 cityTopPlacesBox">
						<div class="container boxContainerImg">
							<img
								:src="require('../../../assets/blogPhotos/gastronomy3.jpg')"
								:alt="currentCity.id"
								:onerror="replaceByDefault"
								class="topPlacesImg"
							/>
						</div>
					</div>
				</div>
				<div v-for="place in places" :key="place._id">
					<div class="cityTopPlacesContainer">
						<!-- 1 -->
						<div class="col col-lg-5 col-12 cityTopPlacesBox">
							<div class="container boxContainer">
								<h2>{{ place.name }}</h2>
								<hr />
								<h4>{{ place.description }}</h4>
								<p>Location: {{ cityName }}</p>
								<button class="btn seeMoreBtn">See More</button>
							</div>
						</div>
						<div class="col col-lg-5 col-12 cityTopPlacesBox">
							<div class="container boxContainerImg">
								<img
									:src="require('../../../assets/blogPhotos/gastronomy2.jpg')"
									:alt="currentCity.id"
									:onerror="replaceByDefault"
									class="topPlacesImg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="">
				<TreeLogo />
			</div>
			<div class="descriptionContainer">
				<h2>
					“Cities, like dreams, are made of desires and fears, even if the
					thread of their discourse is secret, their rules are absurd, their
					perspectives deceitful, and everything conceals something else.”
				</h2>
				<h5>― Italo Calvino, Invisible Cities</h5>
			</div>
		</div>
	</div>
</template>

<script>
import TreeLogo from "../../../assets/Icons/tree.svg";
import Loading from "../../../components/Loading.vue";

export default {
	name: "CityGastronomy",
	components: {
		TreeLogo,
		Loading,
	},
	data() {
		return {
			imgError: false,
			id: null,
			cityName: null,
		};
	},
	created() {
		this.id = this.$route.params.id;
		this.fetchPlaces();
		this.cityName = this.$store.state.cities.city.name;
	},
	computed: {
		loading() {
			return this.$store.state.cities.loading;
		},
		currentCity() {
			return this.$store.state.cities.city;
		},
		places() {
			return this.$store.state.cities.places;
		},
	},
	methods: {
		replaceByDefault(e) {
			e.target.src = this.defaultImg;
		},
		fetchPlaces() {
			this.$store.dispatch("getPlaces", this.id);
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import "../../../assets/sass/_variables.scss";

* {
	font-family: $secondary-font, serif;
}
.cityContainer {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	padding: 0;

	hr {
		color: #1a4531;
		opacity: 1;
	}

	.cityHero {
		width: 100%;

		.cityName {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			text-align: center;
			align-items: center;
			position: absolute;
			top: 25%;
			text-transform: uppercase;
			font-weight: 600;
			font-size: 9vw;
			color: #fff;
			z-index: 2;
		}
	}

	.imgShadow {
		width: 100%;
		box-shadow: 100vw 0px 10px rgba(0, 0, 0, 0.8) inset;

		.cityMainImage {
			opacity: 0.5;
			flex-shrink: 0;
			min-width: 100%;
			max-height: 100vh;
			object-fit: cover;
		}
	}

	.descriptionContainer {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 5rem;

		h2 {
			font-family: $secondary-font, serif;
			font-weight: 400;
			text-align: center;
		}
		h5 {
			margin-top: 2rem;
			text-align: center;
		}
	}

	.citySubmenu {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		background-color: #1a4531;
		min-height: 5rem;
	}

	.cityMainContent {
		padding: 2rem;
		width: 100%;

		.cityTopPlacesContainer {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			.cityTopPlacesBox {
				min-height: 30rem;
				margin: 2rem 1rem;
				background-color: #fff;
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

				.boxContainer {
					display: flex;
					justify-content: space-evenly;
					flex-direction: column;
					height: 100%;
					padding: 2rem 4rem;

					.seeMoreBtn {
						background-color: #1a4531;
						padding: 1rem 2rem;
						color: #fff;

						&:focus {
							box-shadow: 0 0 0 0.25rem rgba(26, 69, 49, 0.25);
						}
					}
				}
				.boxContainerImg {
					display: flex;
					flex-direction: column;
					height: 100%;
					padding: 0;
					img {
						height: 100%;
						object-fit: contain;
					}
				}
			}
			.cityTopPlacesImg {
				max-width: 40%;
				img {
					object-fit: cover;
				}
			}
		}
	}

	.cityColumns {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;
		width: 100%;

		.cityOptions {
			height: 40rem;
			background-color: #fff;
		}
		.gastronomy {
			background-image: url("../../../assets/blogPhotos/gastronomy.jpg");
		}
		.experiences {
			background-image: url("../../../assets/blogPhotos/experiences.jpg");
		}
		.places {
			background-image: url("../../../assets/blogPhotos/places.jpg");
		}
		.gastronomy,
		.experiences,
		.places {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-position: 50% 50%;
			background-size: cover;
			box-shadow: 100vw 0px 10px rgba(0, 0, 0, 0.5) inset;
			transition: box-shadow 0.5s;
			cursor: pointer;

			&:hover {
				box-shadow: 100vw 0px 10px rgba(0, 0, 0, 0.4) inset;
				transition: box-shadow 0.5s;
			}
		}
	}
}
</style>
