<template>
  <div>
    <ul
    v-for="(city, index) in getCities"
    :key="index">
      <li>{{city}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  mounted() {

  },
  computed: {
    getCities() {
      return this.$store.getters['test/cities']
    }
  }
}
</script>

<style>
ul {
  color: yellow;
}



</style>