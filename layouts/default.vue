<template>
  <v-app dark>
<NavBar />
    <main>
      <div class="container" align="center">
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
