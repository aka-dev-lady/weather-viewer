<template>
  <div class="text-center">
    <v-dialog offset-y :activator="activator">
      <v-list>
        <v-list-item>Test1</v-list-item>
        <v-list-item>Test2</v-list-item>
      </v-list>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    activator: null,
    id: '#example'
  }),
  mounted() {
    this.activator = window?.document.querySelector(
      this.id
    );
  },
  methods: {
    closePostMessageSender() {
      window.close();
      window.opener.postMessage('go to home', '*');
    }
  }
}
</script>