<template>
  <v-card
    class="mx-auto primary"
    max-width="500"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h3">
          {{currentCity}}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list class="transparent text-h6">
      <v-list-item
        v-for="item in weatherForecast"
        :key="item.date"
      >
        <v-list-item-title class="text-h6">{{ item.date }}</v-list-item-title>

        <v-list-item-subtitle>
          <v-img
            :src="item.day.condition.icon"
            :alt="item.day.condition.text"
          />
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-right text-h6">
          {{ item.day.mintemp_c }}&deg;C...{{ item.day.maxtemp_c }}&deg;C
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
      weatherForecast() {
        return this.$store.getters['context/getWeather']?.forecast?.forecastday
      },
      weatherIconUrl() {
        return this.$store.getters['context/getWeatherIconUrl']
      }
    }
  }
</script>