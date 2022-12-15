<template>
  <v-card
    class="mx-auto primary toolbar-block"
    max-width="500"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h3">
          {{currentCity}}
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6">
          {{weatherForecast?.date}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list class="transparent">
      <v-list-item
        v-for="item in weatherHours"
        :key="item.time"
      >
        <v-list-item-title class="text-h6">{{ item.time }}</v-list-item-title>

        <v-list-item-subtitle>
          <v-img
            :src="item.condition.icon"
            :alt="item.condition.text"
          />
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-h6">
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
      currentCity() {
        return this.$store.getters['context/getCity']
      },
      weatherForecast() {
        return this.$store.getters['context/getWeather'].forecast?.forecastday['0']
      },
      weatherHours() {
        return this.weatherForecast?.hour
        .filter((item, index) => index%3 === 0)
        .map(item => item.time ? { ...item, time: item.time.split(' ').pop() } : item)
      }
    }
  }
</script>

<style lang="less">

@media screen and (max-width: 300px) {
  .toolbar-block {
    height: auto !important;

    .v-toolbar__content {
      height: auto !important;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>