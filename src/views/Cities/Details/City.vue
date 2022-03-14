<template>
  <div>
    <div v-if="loadingCities || loading">
      <loader />
    </div>
    <div v-else class="container-fluid cityContainer">
      <div class="cityHero">
        <div class="imgShadow">
          <img
            v-if="src"
            :src="src"
            :alt="currentCity.id"
            :onerror="replaceByDefault"
            class="cityMainImage"
          />
        </div>
        <h1 class="cityName">{{ currentCity.name }}</h1>
      </div>
      <div class="descriptionContainer">
        <h2>{{ currentCity.description }}</h2>
      </div>
      <div class="container-fluid citySubmenu">
        <h2>Visit {{ currentCity.name }}</h2>
      </div>
      <div class="cityMainContent">
        <div class="cityTopPlacesContainer">
          <div class="col col-lg-4 col-12 cityTopPlacesBox">
            <div class="container boxContainer">
              <h2>{{ currentCity.name }}'s top place!</h2>
              <hr />
              <h4>
                Discover a warm and relaxing oasis overlooking the Grand Forest
                Metsovo garden and surrounding forest.
              </h4>
              <p>Location: {{ currentCity.name }}</p>
              <button class="btn seeMoreBtn">See More</button>
            </div>
          </div>
          <div class="col col-lg-4 col-12 cityTopPlacesBox">
            <div class="container boxContainerImg">
              <img
                :v-if="src"
                :src="src"
                :alt="currentCity.id"
                :onerror="replaceByDefault"
                class="topPlacesImg"
              />
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
      <div class="cityColumns">
        <div
          class="col col-lg-4 col-12 cityOptions gastronomy"
          @click="$router.push({ name: 'CityGastronomy' })"
        >
          <h1>Gastronomy</h1>
        </div>
        <div
          class="col col-lg-4 col-12 cityOptions experiences"
          @click="$router.push({ name: 'CityExperiences' })"
        >
          <h1>Experiences</h1>
        </div>
        <div
          class="col col-lg-4 col-12 cityOptions places"
          @click="
            $router.push({
              name: 'CityPlaces',
              params: { id: currentCity._id },
            })
          "
        >
          <h1>Places</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeLogo from "../../../assets/Icons/tree.svg";
import loader from "../../../components/Loading.vue";

export default {
  name: "Cities",
  components: {
    TreeLogo,
    loader,
  },
  data() {
    return {
      imgError: false,
      id: null,
    };
  },
  computed: {
    loadingCities() {
      return this.$store.state.cities.loading;
    },
    src() {
      const filename = this.currentCity.files?.split(";")[0];

      return filename ? `http://localhost:1000/static/${filename}` : null;
    },
    loading() {
      return this.$store.state.cities.fetchingCity;
    },
    cities() {
      return this.$store.state.cities.cities;
    },
    currentCity() {
      return this.$store.state.cities.city;
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getCurrentCity(this.id);
  },
  methods: {
    getCurrentCity(cityId) {
      this.$store.dispatch("getCity", cityId);
    },
    replaceByDefault(e) {
      e.target.src = this.defaultImg;
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
