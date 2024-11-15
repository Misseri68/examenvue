<template>
    <div class="container mt-4">
        <div v-if="cubo" class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" alt="Imagen del cubo" />
            <div class="card-body">
                <h5 class="card-title">{{ cubo.nombre }}</h5>
                <p class="card-text">
                    <strong>Modelo:</strong> {{ cubo.modelo }}<br />
                    <strong>Marca:</strong> {{ cubo.marca }}<br />
                    <strong>Color:</strong> {{ cubo.color }}<br />
                    <strong>Precio:</strong> ${{ cubo.precio }}<br />
                    <strong>Valoración:</strong> {{ cubo.valoracion }} / 5
                </p>
            </div>
        </div>
    </div>
    <div v-if="comentarios" class="container mt-4">
        <h3>Comentarios: </h3>
        <div v-for="comentario in comentarios" :key="comentario.id" class="card">
            <strong>Usuario {{ comentario.idUsuario }} escribió:</strong> 
            <p>
                {{ comentario.comentario }}

            </p>
        </div>
    </div>
</template>

<script>
import CubosService from '@/services/CubosService';
const servicio = new CubosService();
export default {
    name: "DetallesComponent",
    data() {
        return {
            idCubo: 0,
            cubo: {},
            comentarios: []
        }
    },
    mounted() {
        this.idCubo = this.$route.params.id;
        this.cargarCubo();
        this.cargarComentarios();
    },
    methods: {
        cargarCubo() {
            servicio.getCubo(this.idCubo).then(cubo => {
                this.cubo = cubo;
            })
        },
        
        cargarComentarios(){
            servicio.getComentarios(this.idCubo).then(comentarios=>{
                this.comentarios = comentarios;
            })
        }
    },
    watch: {
        $route(to, from) {
            if (to.params.id !== from.params.id) {
                this.idCubo = to.params.id;
            }
        }
    }
}
</script>

<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>