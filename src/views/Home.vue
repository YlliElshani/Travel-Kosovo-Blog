<template>
  <div class="container home">
    <div class="instruction">
      <p>
        Zgjedhni qytetin tuaj ne harte dhe shikoni bloget per te!
      </p>
    </div>
    <kosova-map />
    <div class="AboutUs">
      <div class="inside">
        <h2>
          Shikoni dhe postoni te gjitha bukurite e fshehta te Kosoves!
        </h2>
        <p>
          liquam dignissim lorem ut libero tempus, ut pretium quam bibendum.
          Cras dignissim orci ut mi interdum bibendum. In finibus laoreet
          scelerisque. Proin non risus ut nisi aliquet vehicula iaculis at
          ipsum. In ut interdum ligula. Vivamus ut leo tincidunt, lobortis sem
          nec, convallis nunc. Quisque facilisis aliquet augue, sit amet laoreet
          lorem sagittis sed. Nam vitae eros fermentum,
        </p>
        <div v-if="!user">
          <router-link class="router-button" to="#">
            Register for KosovaBlogs <Arrow class="arrow arrow-light" />
          </router-link>
        </div>
        <div v-else>
          <router-link class="router-button" to="#">
            Make a post <Arrow class="arrow arrow-light" />
          </router-link>
        </div>
      </div>
      <img src="../assets/blogPhotos/stock-1.jpg" alt="" />
      <div class="img2">
        <img src="../assets/blogPhotos/stock-2.jpg" alt="" />
      </div>
    </div>
    <!-- <div class="container2">
      <div>
          <img src="../assets/blogPhotos/stock-3.jpg">
          <h4>
              Shikoni 
          </h4>
      </div>
      <div>
          <img src="../assets/blogPhotos/stock-4.jpg">
          <h4>
              me 
          </h4>
      </div>
      <div>
          <img src="../assets/blogPhotos/stock-5.jpg">
          <h4>
              shume
          </h4>
      </div>
  </div> -->
  </div>
</template>

<script>
import KosovaMap from "../components/KosovaMap/MapPath.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    KosovaMap,
    Arrow,
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.instruction {
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 3px;
  display: flex;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 62px;
    text-align: center;
  }
}

.container2 {
  margin-top: 10%;
  height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: #f8f4ed;

  div {
    height: 540px;
    padding: 15px;
    width: 28%;
    margin-right: 2.3%;
    margin-left: 2.3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 325px;
      height: 500px;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 22px;
      text-align: left;
    }

    .router-button {
      font-size: 15px;
      text-decoration: none;
      width: 50px;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
  }
}

.AboutUs {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 2%;
  display: flex;

  img {
    width: 830px;
    height: 580px;
  }

  .img2 {
    width: 670px;
    height: 400px;
    margin-top: 17%;
    position: absolute;
    right: 0;
    z-index: -1;
    img {
      width: 600px;
      height: 400px;
    }
  }

  .inside {
    h2 {
      font-size: 42px;
      text-align: left;
      width: 80%;
    }
    p {
      font-family: "Montserrat", sans-serif;
      font-size: 22px;
      text-align: left;
      width: 60%;
      flex-grow: 1;
    }

    .router-button {
      font-size: 15px;
      text-decoration: none;
      width: 50px;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .AboutUs {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 5%;
    margin-bottom: 2%;
    display: flex;

    img {
      width: 670px;
      height: 380px;
    }

    .inside {
      h2 {
        font-size: 26px;
        text-align: left;
        width: 80%;
      }
      p {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        text-align: left;
        width: 80%;
        flex-grow: 1;
      }

      .router-button {
        font-size: 15px;
        text-decoration: none;
      }
    }
  }
}
</style>
