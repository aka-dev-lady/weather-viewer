<template>
  <div>
    <v-btn
      color="indigo"
      @click="openPostMessageSender"
      dark
    >
    PostMessageSender
    </v-btn>

    <v-btn
      color="indigo"
      id="example"
      dark
    >
    Test
    </v-btn>
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    Menu
  },
  fetch({redirect}) {
    window.onmessage = function (e) {
      if (e.data === 'go to home') {
        redirect('/');
      }
    }
  },
  // mounted() {
  //   // TODO change location.replace on nuxt routing
  //   window.onmessage = function (e) {
  //     if (e.data === 'go to home') {
  //       window.location.replace('http://localhost:3000/');
  //     }
  //   }
  // },
  methods: {
    openPostMessageSender() {
      window.open('http://localhost:3000/postMessageSender');
    }
  }
}

</script>