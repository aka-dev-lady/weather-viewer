<template>
  <v-card color="indigo lighten-2">
    <v-card-title class="justify-center text-h2"><span>Weather</span>-<span>viewer</span></v-card-title>
    <v-toolbar class="toolbar-block" color="teal" dark>
      <v-toolbar-title>Location</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="450px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
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
              <v-btn color="blue darken-1" text @click="changeDialog">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
</div>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-toolbar class="toolbar-block" color="indigo">
      <v-toolbar-title>Weather</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          no-prefetch
          active-class="active"
          class="primary"
          >
          <v-icon >
            {{ item.icon }}
          </v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: [
        {
          icon: 'mdi-calendar-today',
          title: 'Today',
          to: '/',
        },
        {
          icon: 'mdi-hours-24',
          title: 'Hourly',
          to: '/hourly',
        },
        {
          icon: 'mdi-calendar-week',
          title: 'Weekly',
          to: '/weekly',
        },
        {
          icon: 'mdi-message-arrow-right',
          title: 'PostMessage',
          to: '/postMessage',
        },
      ]
  }),
  computed: {
    currentCities() {
      return this.$store.getters["context/cities"];
    },
  },
  methods: {
    setMyLocationToLocalStorage(city) {
      this.$store.dispatch("context/setMyLocationToLocalStorage", city);
    },
    changeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style lang="less">

@media screen and (max-width: 780px) {
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
