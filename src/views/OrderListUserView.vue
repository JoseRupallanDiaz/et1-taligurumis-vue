<template>
    <div class="border rounded-3 shadow-sm m-5 p-3 d-flex flex-grow-1 flex-column gap-3 align-items-start">
        <h3>Mis pedidos</h3>
        <div class="bg-secondary rounded-3 shadow-sm w-100 d-flex flex-column py-3" v-for="order in orders" :key="order._id">
            <div class="d-flex gap-2 mx-3">
                <small>{{order.date}}</small>
                <small class="px-1 rounded shadow-sm" :class="tagStyle(order.state)">{{order.state}}</small>
            </div>
            <small class="mx-3">Numero de orden #{{order._id}}</small>
            <hr>
            <div class="d-flex mx-3 gap-2">
                <img :src="order.img" class="rounded border order-picture">
                <div class="d-flex flex-column">
                    <h5 class="fw-bold">{{order.name}}</h5>
                    <h6>Descripción</h6>
                    <p class="ms-3">{{order.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            orders: [
                {
                    _id: 0,
                    date: "01/01/2022",
                    name: "Mi pedido 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare commodo quam vel suscipit. Fusce volutpat purus at lorem sagittis elementum. Proin sed eros semper, tempus ex id, suscipit tellus. Duis eget fringilla lorem. Fusce et volutpat neque, et interdum nisi. Nulla non justo convallis, luctus erat eget, auctor lectus. Suspendisse sit amet eros tellus. Pellentesque vel tempus tellus.",
                    img: "https://img001.prntscr.com/file/img001/-9g7DKEiRuOfQd5fWjJFUw.png",
                    state: "En revisión"
                },
                {
                    _id: 2,
                    date: "02/01/2022",
                    name: "Tulipanes",
                    description: "Quiero pedir un ramo de tulipanes tejidos de al menos 10 centimetros de alto",
                    img: "https://i.ytimg.com/vi/fgSW8TwLLgE/maxresdefault.jpg",
                    state: "En preparación"
                },
                {
                    _id: 3,
                    date: "01/01/2022",
                    name: "Mi pedido 3",
                    description: "descripcion de pedido 3",
                    img: "imgURLhere",
                    state: "Completado"
                },
                {
                    _id: 4,
                    date: "01/01/2022",
                    name: "Mi pedido 4",
                    description: "descripcion de pedido 4",
                    img: "imgURLhere",
                    state: "Rechazado"
                },
            ]
        }
    },
    methods:{
        tagStyle(value){
            switch(value){
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
    .order-picture{
        width: 74px;
        height: 74px;
    }
</style>