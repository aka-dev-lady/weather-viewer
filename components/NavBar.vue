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

    <span class="subheading">My City</span>

    <v-spacer></v-spacer>

    <v-container id="dropdown">
      <v-overflow-btn
        @change="value => onCityChange(value)"
        class="my-2"
        :items="cities"
        menu-props="top"
        label="City"
        target="#dropdown"
      ></v-overflow-btn>
    </v-container>

    <v-spacer></v-spacer>

    <v-text-field
      label="Outline"
      single-line
      outline
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        Today
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text>
        Tomorrow
      </v-btn>

    </v-toolbar-items>

  </v-toolbar>
</v-card>
</template>

<script>
export default {
  data: () => ({
      cities: ['London', 'Paris', 'Kiev', 'Berlin'],
    }),
  methods: {
    onCityChange(city) {
      this.$axios.request({
        params: {q: city, days: '3'}
      })
      .then(res => console.log(res.data))
      .catch(function (error) {
        console.error(error);
      })
    }
  }
}
</script>

<style scoped>
#dropdown {
  width: 300px;
}
</style>