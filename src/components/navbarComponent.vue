<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="" alt="Logo" width="30" height="24">
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li>
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item"><a class="nav-link">Mis Pedidos</a></li>
          <li class="nav-item"><a class="nav-link">Lista Pedidos</a></li>
          <li class="nav-item"><a class="nav-link">Nuevo Pedido</a></li>
          <li class="nav-item"><a class="nav-link">Iniciar Sesión</a></li>
          <li class="nav-item"><a class="nav-link">Cerrar Sesión</a></li>
        </ul>
      </div>
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