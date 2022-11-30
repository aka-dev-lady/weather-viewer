<template>
  <div>
    <v-btn
      color="indigo"
      @click="openPostMessageSender"
      dark
    >
    PostMessageSender
    </v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    // TODO change location.replace on nuxt routing
    window.onmessage = function (e) {
      if (e.data === 'go to home') {
        window.location.replace('http://localhost:3000/');
      }
    }
  },
  methods: {
    openPostMessageSender() {
      window.open('http://localhost:3000/postMessageSender');
    }
  }
}

</script>