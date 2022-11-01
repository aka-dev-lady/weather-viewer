<template>
<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{currentCity}}
        </v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="6"
        >
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
      return {
       city: '',
       isCurrentCity: false,
       weather: {}
    }
  },
  mounted() {
    this.$store.dispatch('context/initCurrentCity');
  },
  watch: {
    isCurrentCity() {
      if(this.isCurrentCity) {
        if(!!this.city) {
          this.weatherChange(this.city);
        }
        this.isCurrentCity = false;
      }
    }
  },
  computed: {
    currentCity () {
      this.city = this.$store.getters['context/getCity'];
      this.isCurrentCity = true;
      return this.city
    }
  },
  methods: {
    weatherChange(city) {
      this.$axios.request({
              params: {q: city, days: '3'}
            })
            .then(res => {
              this.weather = res.data;
              console.log(this.weather);
            })
            .catch(function (error) {
              console.error(error);
            })
    },
  }
}
</script>

<style>

</style>
