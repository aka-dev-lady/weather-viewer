<template>
<v-card
    class="mx-auto primary"
    max-width="450"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{currentCity}}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{weather?.current?.last_updated}}
          {{weather?.current?.condition.text}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      <v-row justify="center">
          <v-dialog
            v-model="dialog"
            persistent
            max-width="450px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="indigo"
                dark
                small
                v-bind="attrs"
                v-on="on"
              >
              Weather in cities
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">City selection</span>
              </v-card-title>
              <v-card-text>
                <v-container id="dropdown" >
                  <v-overflow-btn
                    @change="onCityChange"
                    class="my-2"
                    :items="currentCities"
                    menu-props="top"
                    label="Select city"
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
    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="6"
        >
        {{weather?.current?.temp_c}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            :src="weatherIconUrl"
            alt="Image"
            width="100"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{weather?.current?.wind_kph}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{weather?.current?.cloud}} %</v-list-item-subtitle>
    </v-list-item>

    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  data: () => ({
      dialog: false,
    }),
  mounted() {
    this.$store.dispatch('context/initCurrentCity');
  },
  computed: {
    currentCity () {
      return this.$store.getters['context/getCity']
    },
    currentCities() {
      return this.$store.getters['context/cities']
    },
    weather() {
      return this.$store.getters['context/getWeather']
    },
    weatherIconUrl() {
      return this.$store.getters['context/getWeatherIconUrl']
    }
  },
  methods: {
    onCityChange(city) {
      this.$store.dispatch('context/setCurrentCity', city)
    },
    changeDialog() {
      this.dialog = false;
    }
  }
}
</script>
