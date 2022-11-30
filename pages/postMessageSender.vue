<template>
  <div>
    <v-btn
      color="indigo"
      @click="closePostMessageSender"
      dark
    >
    ClosePostMessageSender
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    closePostMessageSender() {
      window.close();
      window.opener.postMessage('go to home', '*');
    }
  }
}

</script>