<template>
  <div class="fixed d-flex flex-column justify-content-between">
    <navbarComponent />
    <router-view />
    <div class="self-align-end">
      <footerComponent />
    </div>
  </div>
</template>

<script>
import navbarComponent from '@/components/navbarComponent.vue'
import footerComponent from '@/components/FooterComponent.vue'

export default {
  components: { navbarComponent, footerComponent }
}
</script>

<style>
.fixed{
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  font-weight: bolder;
}
</style>
