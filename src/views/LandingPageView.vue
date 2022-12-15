<template>
    <div class="d-flex flex-column align-items-center bg-secondary">
        <div id="carouselExampleInterval" class="carousel slide carrusel shadow" data-bs-ride="carousel">
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100" data-bs-interval="2000">
                    <img class="w-100" :src="carrusel[0].img">
                    <div class="carousel-caption">
                        <h4 class="text-shadow">{{ carrusel[0].title }}</h4>
                        <h5 class="text-shadow">{{ carrusel[0].desc }}</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img class="d-block" :src="carrusel[1].img">
                    <div class="carousel-caption">
                        <h4 class="text-shadow">{{ carrusel[1].title }}</h4>
                        <h5 class="text-shadow">{{ carrusel[1].desc }}</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="d-flex flex-wrap m-5 px-5 gap-5 justify-content-center">
            <div class="d-flex rounded-4 overflow-hidden shadow product bg-light border text-dark"
                v-for="pedido in pedidos" :key="pedido.id">
                <div class="d-flex">
                    <img class="h-100 rounded-4 rounded-4-end" :src="pedido.img">
                </div>
                <div class="d-flex flex-column p-3 flex-grow-1">
                    <h3>{{ pedido.title }}</h3>
                    <span>{{ pedido.date }}</span>
                    <span>{{ pedido.desc }}</span>
                    <span>{{ pedido.user.review }}</span>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <a class="btn btn-primary shadow text-dark" :href="'/nuevo-pedido'">Crear nuevo pedido</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSelected: "0",
            carrusel: [
                {
                    id: 1,
                    img: "https://wallpaperaccess.com/full/658657.jpg",
                    title: "Bienvenidos!",
                    desc: "leyenda 1"
                },
                {
                    id: 2,
                    img: "https://img.freepik.com/free-photo/cozy-background-wallpaper-with-yarn-knitting_169016-6305.jpg",
                    title: "PLACEHOLDER!",
                    desc: "leyenda 2"
                }
            ],
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
    height: 25em;
}

.product {
    width: 500px;
    height: 200px;
}

.product img {
    width: 200px;
    min-width: 200px;
}

.text-shadow {
    text-shadow: 0px 1px 3px black;
}
</style>