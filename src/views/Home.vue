<template>
  <div class="container home">
    <h1 class="d-flex justify-content-center">Homepage</h1>
    <hr />
    <kosova-map></kosova-map>
  </div>
</template>

<script>
import KosovaMap from "../components/KosovaMap/MapPath.vue";
export default {
  name: "Home",
  components: {
    KosovaMap,
  },
};
</script>

<style lang="scss" scoped></style>
