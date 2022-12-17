<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="indigo">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          dark
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon>
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 text-center teal">
        {{ new Date().getFullYear() }} — <strong>Solvve</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        { name: 'mdi-facebook', link: 'https://www.facebook.com/solvvesoftware/'},
        { name: 'mdi-twitter', link: 'https://twitter.com/solvvesoftware/'},
        { name: 'mdi-linkedin', link: 'https://www.linkedin.com/company/solvve/'},
        { name: 'mdi-instagram', link: 'https://www.instagram.com/solvvesoftware/'},
      ],
    }),
  }
</script>
