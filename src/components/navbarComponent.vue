<template>
  <nav class="bg-primary text-dark">
    <div class="d-flex gap-3 align-items-center p-2">
      <a class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" height="50">
      </a>
      <router-link to="/" class="nav-link">Inicio</router-link>
      <a class="nav-link">Mis Pedidos</a>
      <a class="nav-link">Lista Pedidos</a>
      <router-link to="/nuevo-pedido" class="nav-link">Nuevo Pedido</router-link>
      <a class="nav-link">Iniciar Sesión</a>
      <a class="nav-link">Cerrar Sesión</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbarComponent'
}
</script>

<style>
</style>