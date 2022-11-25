<template>
  <v-app dark>
    <NavBar />
    <main align="center">
      <div class="container">
        <nuxt />
      </div>
    </main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer
  }
}
</script>
