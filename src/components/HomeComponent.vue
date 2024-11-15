<template>
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
        name: "HomeComponent",
        data() {
            return {
                cubos: []
            }
        },
        mounted(){
            service.getCubos().then(cubos => {
                this.cubos = cubos;
            })
        }

    }
</script>

