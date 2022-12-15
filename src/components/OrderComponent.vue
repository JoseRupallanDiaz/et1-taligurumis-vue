<template>
    <div class="d-flex gap-2 mx-3">
        <small>Fecha de creación {{ order.date }}</small>
        <small class="px-1 rounded shadow-sm" :class="tagStyle(order.state)">{{ order.state }}</small>
    </div>
    <small class="mx-3">Numero de orden #{{ order._id }}</small>
    <hr>
    <div class="d-flex mx-3 gap-2">
        <img :src="order.img" class="rounded border order-picture">
        <div class="d-flex flex-column">
            <h5 class="fw-bold">{{ order.name }}</h5>
            <h6>Descripción</h6>
            <p class="ms-3">{{ order.description }}</p>
        </div>
    </div>
    <div v-if="order.review.state" class="d-flex flex-column mx-3">
        <h5 class="fw-bold">Reseña</h5>
        <div>
            <span class="ms-3">{{ order.review.msg }}</span>
            <p class="ms-3 fst-italic">{{ order.review.points }}/10</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        order: Object
    },
    methods: {
        tagStyle(value) {
            switch (value) {
                case "Completado":
                    return ['bg-success text-success-text'];
                case "En revisión":
                    return ['bg-info text-info-text'];
                case "En preparación":
                    return ['bg-warning text-warning-text'];
                case "Rechazado":
                    return ['bg-danger text-danger-text'];
            }
        }
    }
}
</script>

<style>

</style>