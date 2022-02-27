<template>
  <!--<div class="container d-flex justify-content-center aboutUs">
    <h1>About Us</h1>    
  </div>-->
  <div id="main">
    <div class="container">
      <section class="about-container container">
        <div class="about-sections">
          <img class="offer-image" :src="photo1" alt="" />
          <div class="description">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quis nihil consectetur porro optio distinctio dignissimos, quo
              ratione eius ipsa libero quia necessitatibus? Quis id ut in
              tenetur. Officia neque unde consequuntur ad recusandae ratione hic
              cumque corporis deleniti esse maiores voluptatum, dolorem beatae
              rerum voluptas assumenda aspernatur? Nam facilis eveniet
              consequuntur nesciunt neque minus, ex hic esse eos magni? Dolorem
              ipsa amet in nostrum.
            </p>
          </div>
        </div>
        <div class="about-sections">
          <div class="description">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              quos reprehenderit corporis quaerat vitae, eaque sapiente
              mollitia. Quos officiis maiores ab sint temporibus eveniet nobis
              id reprehenderit possimus quibusdam ipsum nesciunt, expedita
              repudiandae provident! Et doloremque natus consequuntur est illo
              sit quo itaque in facere qui amet neque id deserunt accusamus
              illum, voluptatem accusantium cupiditate ipsum quos autem eaque
              officia?
            </p>
          </div>
          <img class="offer-image" :src="photo2" alt="" />
        </div>
        <div class="about-sections">
          <img class="offer-image" :src="photo3" alt="" />
          <div class="description">
            <h3>Experience</h3>
            <p>
              remains an experience to remember. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nam excepturi quas, illum nesciunt
              cum, nisi itaque voluptatibus delectus, assumenda praesentium
              magnam. Quaerat corrupti cupiditate reprehenderit vitae culpa
              consequuntur id dolores cum mollitia vero repellendus quod eius
              at, inventore dolor praesentium tempora provident nemo? Officia
              facilis fuga ratione magni numquam suscipit.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  data() {
    return {
      photo1:
        "https://media.istockphoto.com/photos/aerial-view-of-prizren-city-in-kosovo-picture-id589132412?k=20&m=589132412&s=612x612&w=0&h=Os_cdfZpHAD-SCeZMI9shk0MfiwsY_zpQZBTAMjCTiQ=",
      photo2:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kosovo_National_Library.jpg",
      photo3: "https://upload.wikimedia.org/wikipedia/commons/2/28/Ferizaj.jpg",
    };
  },
};
</script>

<style scoped>
.container {
  width: 95%;
  height: 70%;
  margin: auto;
  overflow: hidden;
}
.offer-image {
  height: 300px;
}
.description {
  padding: 50px;
}

.about-container {
  display: flex;
  flex-direction: column;
}

.about-sections {
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 50px 0 50px 0;
}
</style>
