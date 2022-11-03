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

    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Set My Location
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">My Location</span>
            </v-card-title>
            <v-card-text>
              <v-container id="dropdown">
                <v-overflow-btn
                  @change="setMyLocationToLocalStorage"
                  class="my-2"
                  :items="currentCities"
                  label="Choose location"
                  target="#dropdown"
                ></v-overflow-btn>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <v-spacer></v-spacer>

    <v-container id="dropdown">
      <v-overflow-btn
        @change="onCityChange"
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
      dialog: false,
    }),
  computed: {
    currentCities() {
      return this.$store.getters['context/cities']
    }
  },
  methods: {
    onCityChange(city) {
      this.$store.dispatch('context/setCurrentCity', city)
    },
    setMyLocationToLocalStorage(city) {
      this.$store.dispatch('context/setMyLocationToLocalStorage', city)
    }
  }
}
</script>

<style scoped>
#dropdown {
  width: 300px;
}
</style>