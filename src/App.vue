<template>
  <navbarComponent />
  <div class="router">
    <router-view />
  </div>
  <footerComponent />
</template>

<script>
import navbarComponent from '@/components/navbarComponent.vue'
import footerComponent from '@/components/FooterComponent.vue'

export default {
  components: { navbarComponent, footerComponent }
}
</script>

<style>
.router {
  min-height: 78.6vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
