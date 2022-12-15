<template>
    <form class="mx-3 d-flex flex-column gap-3">
        <div>
            <label for="review-msg" class="form-label fw-bold">Escribir reseña</label>
            <textarea class="form-control" id="review-msg"></textarea>
        </div>
        <div class="w-50">
            <div class="d-flex gap-3">
                <label for="review-points" class="form-label fw-bold">Valoración</label>
                <p>{{points}}/10</p>
            </div>
            <input v-model="points" type="range" id="review-points" min="0" max="10" class="form-range">
        </div>
        <div>
            <button class="btn btn-primary">Enviar</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            points: 0
        }
    }
}
</script>

<style>

</style>