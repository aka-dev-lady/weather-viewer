<template>
  <v-card
    color="indigo lighten-4"
  >
  <v-card-title class="justify-center">Weather-viewer</v-card-title>
  <v-toolbar
    color="indigo"
    dark
  >
    <v-toolbar-title>Location selection</v-toolbar-title>
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
                  @click="changeDialog"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>

<v-spacer></v-spacer>
      <v-container id="dropdown" >
        <v-overflow-btn
          @change="onCityChange"
          class="my-2"
          :items="currentCities"
          menu-props="top"
          label="Weather in cities"
          target="#dropdown"
        ></v-overflow-btn>
      </v-container>
      </v-toolbar>
      <v-toolbar color="blue">
      <v-toolbar-title>Weather selection</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn text>
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
          Today
        </nuxt-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text>
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/hourly">
          Hourly
        </nuxt-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text>
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/weekly">
            Weekly
        </nuxt-link>
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
    },
    changeDialog() {
      this.dialog = false;
    }
  }
}
</script>

<style scoped>
#dropdown {
  width: 300px;
}
</style>