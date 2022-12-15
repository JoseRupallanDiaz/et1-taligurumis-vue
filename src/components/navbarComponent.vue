<template>
  <nav class="bg-primary text-dark">
    <div class="d-flex gap-3 align-items-center p-2">
      <a class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" height="50">
      </a>
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/pedidos" class="nav-link">Mis Pedidos</router-link>
      <router-link to="/pedidos/admin" class="nav-link">Lista Pedidos</router-link>
      <router-link to="/nuevo-pedido" class="nav-link">Nuevo Pedido</router-link>
      <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
      <a class="nav-link btn" v-on:click="endSession()">Cerrar Sesión</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbarComponent',
  methods: {
    endSession(){
      alert("Cerrando sesión");
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>