<template>
  <div>
    <NavBar />

    <main>
      <div class="container" align="center">
        <nuxt />
      </div>
    </main>
  </div>

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
