<template>
    <div class="d-flex w-100 justify-content-center align-items-center flex-grow-1">
        <div class="d-flex flex-column border shadow-sm bg-light w-25 h-50 align-items-center p-3 rounded">
            <h2 class="my-3">Iniciar Sesión</h2>
            <form class="w-100 d-flex flex-column gap-3" v-on:submit.prevent="login()">
                <div>
                    <label class="form-label" for="username">Usuario</label>
                    <input class="form-control" id="username" v-model="user.username" placeholder="Nombre de usuario" required>
                </div>
                <div>
                    <label class="form-label" for="password">Contraseña</label>
                    <input class="form-control" id="password" v-model="user.password" placeholder="Ingrese su contraseña" required>
                </div>
                <button class="btn btn-primary" >Iniciar sesión</button>
                <span class="align-self-center">No tienes cuenta? <router-link class="link-dark-primary" to="/registrar">Registrate aquí</router-link></span>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                username: "",
                password: ""
            }
        }
    },
    methods:{
        login(){
            alert(this.user.username +" "+this.user.password);
        }
    }
}
</script>

<style>

</style>