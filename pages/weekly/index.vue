<template>
  <v-card
    class="mx-auto primary"
    max-width="500"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h3">
          <strong>{{currentCity}}</strong>
        </v-list-item-title>
        <v-list-item-title class="text-h4">
          ({{weatherLocation?.country}})
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list class="transparent text-h6">
      <v-list-item
        v-for="(item, index) in weatherForecast"
        :key="index"
      >
        <v-list-item-title class="text-h6">{{ item.date }}<br/>
          <v-btn class="indigo" :to="openDay(index)">
            <v-icon >
              mdi-hours-24
            </v-icon>
            Hourly
          </v-btn>
        </v-list-item-title>

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
      weatherLocation() {
        return this.$store.getters['context/getWeather'].location
      }
    },
    methods: {
      openDay(index) {
        return '/weekly/' + index
      }
    }
  }
</script>