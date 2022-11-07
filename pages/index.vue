<template>
<v-card
    class="mx-auto"
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
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{weather?.current?.cloud}} %</v-list-item-subtitle>
    </v-list-item>

    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('context/initCurrentCity');
  },
  computed: {
    currentCity () {
      return this.$store.getters['context/getCity']
    },
    weather() {
      return this.$store.getters['context/getWeather']
    },
    weatherIconUrl() {
      return this.$store.getters['context/getWeatherIconUrl']
    }
  }
}
</script>
