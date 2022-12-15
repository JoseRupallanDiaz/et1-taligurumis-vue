<template>
  <div class="d-flex w-100 justify-content-center align-items-center flex-grow-1">
        <div class="d-flex flex-column border shadow-sm bg-light w-25 h-50 align-items-center p-3 rounded">
            <h2 class="my-3">Nueva Cuenta</h2>
            <form class="w-100 d-flex flex-column gap-3">
                <div>
                    <label class="form-label" for="username">Usuario</label>
                    <input class="form-control" id="username" placeholder="Nombre de usuario" required>
                </div>
                <div>
                    <label class="form-label" for="password">Contraseña</label>
                    <input class="form-control" id="password" placeholder="Ingrese su contraseña" required>
                </div>
                <div>
                    <label class="form-label" for="phone-number">Numero de teléfono</label>
                    <input class="form-control" id="password" placeholder="+56 9 1234 5678" required>
                </div>
                <button class="btn btn-primary" >Registrarse</button>
                <span class="align-self-center">Ya tienes cuenta? <router-link class="link-dark-primary" to="/login">Inicia sesión aqui</router-link></span>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>