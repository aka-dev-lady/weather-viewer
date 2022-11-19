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
          {{weather?.forecast?.forecastday['0'].date}}
          hourly weather
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list class="transparent">
      <v-list-item
        v-for="item in weather?.forecast?.forecastday['0'].hour"
        :key="item.time"
      >
        <v-list-item-title>{{ item.time }}</v-list-item-title>

        <v-list-item class="text-right">{{item.condition.text}}</v-list-item>

        <v-list-item-subtitle class="text-right">
          {{ item.temp_c }}&deg;C
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
      }
    }
  }
</script>