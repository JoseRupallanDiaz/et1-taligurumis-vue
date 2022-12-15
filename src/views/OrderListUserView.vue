<template>
    <div class="bg-secondary border rounded-3 shadow-sm m-5 p-3 d-flex flex-grow-1 flex-column gap-3 align-items-start">
        <h3 class="m-2">Mis pedidos</h3>
        <div class="bg-light rounded-3 shadow-sm w-100 d-flex flex-column py-3 border" v-for="order in orders"
            :key="order._id">
            <orderComponent :order="order"></orderComponent>
            <reviewComponent v-if="order.state == 'Completado' && !order.review.state" />
        </div>
    </div>
</template>

<script>
import orderComponent from '@/components/OrderComponent.vue'
import reviewComponent from '@/components/reviewComponent.vue'

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
                        state: false
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
    components: { orderComponent, reviewComponent }
}
</script>

<style>
.order-picture {
    width: 74px;
    height: 74px;
}
</style>