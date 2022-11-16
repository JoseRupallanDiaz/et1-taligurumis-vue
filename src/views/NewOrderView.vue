<template>
    <div class="d-flex w-100 justify-content-center my-5">
        <div class="p-3 border rounded-3 shadow-sm box-size">
            <h2>Nuevo Pedido</h2>
            <form class="d-flex flex-column gap-3 text-start">
                <div class="w-100">
                    <label class="form-label" for="title">Titulo</label>
                    <input class="form-control" id="title" placeholder="Figura de Pikachu">
                </div>
                <div class="w-100">
                    <label class="form-label" for="title">Detalles</label>
                    <textarea class="form-control" id="desc"
                        placeholder="Altura 30cm min. colores..."></textarea>
                </div>
                <div class="mb-3 w-100">
                    <label for="formFile" class="form-label">Imagen referencial</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <a class="btn btn-primary">Enviar pedido</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.box-size {
    width: 500px
}
</style>