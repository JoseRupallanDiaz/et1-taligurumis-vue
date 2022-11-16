<template>
    <div class="w-100 overflow-hidden shadow">
        <div class="carrusel bg-primary w-100">Imagen</div>
    </div>
    <div class="d-flex flex-wrap m-5 px-5 gap-5 justify-content-center">
        <div class="d-flex bg-primary rounded-4 overflow-hidden shadow" v-for="pedido in pedidos" :key="pedido.id">
            <div class="card-img bg-warning d-flex">
                <img class="w-100" :src="pedido.img">
            </div>
            <div class="d-flex flex-column card-body p-2">
                <h3>{{ pedido.title }}</h3>
                <span>{{ pedido.date }}</span>
                <span>{{ pedido.desc }}</span>
                <span>{{ pedido.user.review }}</span>
            </div>
        </div>
    </div>
    <div class="my-5">
        <a class="btn btn-primary shadow">Crear nuevo pedido</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pedidos: [
                {
                    id: 1,
                    img: "https://alamadriguera.ams3.cdn.digitaloceanspaces.com/2021/08/Trufa-Amigurumi-Carrusel-1.jpg",
                    title: "Titulo de pedido 1",
                    date: "01/01/2022",
                    desc: "30x20x20 cm",
                    user: {
                        name: "cliente 1",
                        id: "1",
                        review: "Reseña de producto por cliente 1"
                    }
                },
                {
                    id: 2,
                    img: "https://www.lovelycraft.com/wp-content/uploads/2021/10/Lilo-y-Stitch-PDF-Amigurumi-Patron-Gratis.jpg",
                    title: "Titulo de pedido 2",
                    date: "01/01/2022",
                    desc: "30x20x20 cm",
                    user: {
                        name: "cliente 2",
                        id: "2",
                        review: "Reseña de producto por cliente 2"
                    }
                },
                {
                    id: 3,
                    img: "https://www.lollipops.com.co/wp-content/uploads/2021/09/Coneja-crema-y-rosa-1.jpg",
                    title: "Titulo de pedido 3",
                    date: "01/01/2022",
                    desc: "30x20x20 cm",
                    user: {
                        name: "cliente 3",
                        id: "3",
                        review: "Reseña de producto por cliente 3"
                    }
                }
            ]
        }
    }
}
</script>

<style>
.carrusel {
    height: 30rem;
}

.card-body {
    height: 200px;
    width: 400px;
}

.card-img {
    height: 200px;
    width: 200px;
}
</style>