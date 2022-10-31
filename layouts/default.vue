<template>
  <v-app dark>
    <NavBar />
    <main align="center">
      <div class="container">
        <nuxt />
      </div>
    </main>
</v-app>


</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }

}
</script>
