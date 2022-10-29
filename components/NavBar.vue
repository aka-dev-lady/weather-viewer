<template>
  <v-toolbar
    color="purple"
    dark
  >
    <v-toolbar-title>Weather-viewer</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <v-spacer></v-spacer>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        Today
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Tomorrow
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Day after tomorrow
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	@import "@/assets/variables.scss";
</style>