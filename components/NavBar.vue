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

    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      menu-props="top"
      label="Overflow Btn w/ menu-props"
      target="#dropdown-example-1"
    ></v-overflow-btn>

    <v-spacer></v-spacer>

    <v-text-field
      label="Outline"
      single-line
      outline
    ></v-text-field>

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
  data: () => ({
      dropdown_font: ['London', 'Paris', 'Kyiv', 'Berlin'],
    }),
}
</script>

<style scoped>

</style>