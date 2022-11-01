<template>
  <v-card
    color="grey lighten-4"
  >
  <v-toolbar
    color="blue"
    dark
  >
    <v-toolbar-title>Weather-viewer</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      label="Enter city"
      single-line
      outline
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-container id="dropdown">
      <v-overflow-btn
        @change="value => onCityChange(value) "
        class="my-2"
        :items="currentCities"
        menu-props="top"
        label="Choose city"
        target="#dropdown"
      ></v-overflow-btn>
    </v-container>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        Weather
        <br />
        Tomorrow
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text>
        Weather
        <br />
        After
        <br />
        Tomorrow
      </v-btn>

    </v-toolbar-items>

  </v-toolbar>
</v-card>
</template>

<script>
export default {
  data: () => ({

    }),
    mounted() {
    // this.$store.dispatch('context/initCurrentCity')
  },
  computed: {
    currentCities() {
      return this.$store.getters['context/cities']
    }
  },
  methods: {
    onCityChange(city) {
      this.$store.dispatch('context/setCurrentCity', city)
    }
  }
}
</script>

<style scoped>
#dropdown {
  width: 300px;
}
</style>