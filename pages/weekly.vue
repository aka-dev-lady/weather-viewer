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
          {{weather?.forecast?.forecastday['0'].date}}
          {{weather?.forecast?.forecastday['0'].day.condition.text}}
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

    <v-list class="transparent">
      <v-list-item
        v-for="item in weather?.forecast?.forecastday"
        :key="item.date"
      >
        <v-list-item-title>{{ item.date }}</v-list-item-title>

        <v-list-item>{{item.day.condition.text}}</v-list-item>

        <v-list-item-subtitle class="text-right">
          {{ item.day.mintemp_c }}&deg;C ... {{ item.day.maxtemp_c }}&deg;C
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
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