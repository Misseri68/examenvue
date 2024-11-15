<template>
    <h1 class="text-center"> Cubos de la marca {{ marca }}</h1><br />
    <div class="container d-flex flex-wrap justify-content-center">
        <div v-for="cubo in cubos" :key="cubo.id" class="card">
            <img :src="cubo.imagen" alt="imagen" width="200px" height="200px">
            <h6>{{ cubo.nombre }}</h6>
            <p>Precio: {{ cubo.precio }}</p>
            <p>Valoracion:{{ cubo.valoracion }}</p>
            <router-link class="btn btn-info" :to="'/cubos/detalles/' + cubo.idCubo">Ver detalles</router-link>
        </div>
    </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const service = new CubosService();
export default {
    name: "MarcaComponent",
    data() {
        return {
            marca: "",
            cubos: "",
        }
    },
    methods: {
        cargarCubos() {
            service.getCubosMarcas(this.marca).then(cubos => {
                this.cubos = cubos;
            })
        },

        verDetalles() { }
    },
    mounted() {
        this.marca = this.$route.params.marca;
        this.cargarCubos();
    },
    watch: {
        $route(to, from) {
            if (to.params.marca !== from.params.marca) {
                this.marca = to.params.marca;
                this.cargarCubos();
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>