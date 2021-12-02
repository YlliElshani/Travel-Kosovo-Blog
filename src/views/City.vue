<template>
  <div class="container d-flex justify-content-center cities">
    <h1>City: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Cities",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
