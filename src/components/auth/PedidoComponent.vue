<template>
    <div class="container mt-5">
        <h3>Selecciona un cubo para pedirlo</h3>
        <select v-model="id">
            <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo">
                {{ cubo.nombre }}
            </option>
        </select>
        <button v-on:click="crearPedido(id)">Añadir a pedidos</button>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import CubosService from '@/services/CubosService'
const cubosService = new CubosService();
const authService = new AuthService();
    export default {
        name: "PedidoComponent",
        data() {
            return {
                id: 0,
                cubos: []
            }
        },
        mounted(){
            if(authService.getToken()){
                cubosService.getCubos().then( cubos =>{
                    this.cubos = cubos;
                })
            }
            else{
                this.$router.push("/login");
            }
        },
        methods:{
            crearPedido(idCubo){
                authService.enviarPedido(idCubo).then(this.$router.push("/compras"));
            }
        }
    }
</script>

