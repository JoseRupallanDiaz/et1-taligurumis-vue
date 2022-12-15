<template>
    <div class="border rounded-3 shadow-sm m-5 p-3 d-flex flex-grow-1 flex-column gap-3 align-items-start bg-secondary">
        <h3 class="m-2">Pedidos de Usuarios</h3>
        <div class="d-flex flex-column gap-2">
            <div class="d-flex rounded-4 shadow-sm bg-light overflow-hidden" v-for="(order, index) in orders" :key="index">
                <div class="px-2 d-flex align-items-center bg-primary border-end">
                    <p class="text-dark-primary">{{ index + 1 }}</p>
                </div>
                <div class="d-flex flex-column w-100 py-3">
                    <OrderComponentVue :order="order" />
                </div>
                <div class="border-start d-flex flex-column justify-content-center p-3 gap-3">
                    <select class="form-select">
                        <option selected>En revision</option>
                        <option>En preparación</option>
                        <option>Completado</option>
                        <option>Rechazado</option>
                    </select>
                    <button class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderComponentVue from '@/components/OrderComponent.vue';

export default {
    data() {
        return {
            orders: [
                {
                    _id: 0,
                    date: "01/01/2022",
                    name: "Mi pedido 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare commodo quam vel suscipit. Fusce volutpat purus at lorem sagittis elementum. Proin sed eros semper, tempus ex id, suscipit tellus. Duis eget fringilla lorem. Fusce et volutpat neque, et interdum nisi. Nulla non justo convallis, luctus erat eget, auctor lectus. Suspendisse sit amet eros tellus. Pellentesque vel tempus tellus.",
                    img: "https://img001.prntscr.com/file/img001/-9g7DKEiRuOfQd5fWjJFUw.png",
                    state: "En revisión",
                    review: {
                        msg: "",
                        points: 0,
                        state: false
                    }
                },
                {
                    _id: 2,
                    date: "02/01/2022",
                    name: "Tulipanes",
                    description: "Quiero pedir un ramo de tulipanes tejidos de al menos 10 centimetros de alto",
                    img: "https://i.ytimg.com/vi/fgSW8TwLLgE/maxresdefault.jpg",
                    state: "En preparación",
                    review: {
                        msg: "",
                        points: 0,
                        state: false
                    }
                },
                {
                    _id: 3,
                    date: "01/01/2022",
                    name: "Mi pedido 3",
                    description: "descripcion de pedido 3",
                    img: "imgURLhere",
                    state: "Completado",
                    review: {
                        msg: "Bonitooo",
                        points: 7,
                        state: true
                    }
                },
                {
                    _id: 4,
                    date: "01/01/2022",
                    name: "Mi pedido 4",
                    description: "descripcion de pedido 4",
                    img: "imgURLhere",
                    state: "Rechazado",
                    review: {
                        msg: "",
                        points: 0,
                        state: false
                    }
                },
            ]
        }
    },
    components: { OrderComponentVue }
}
</script>

<style>

</style>