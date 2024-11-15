<template>
    <div class="container mt-5">
        <router-link class="btn btn-warning mb-4" to="/compras/pedido">Nuevo pedido</router-link>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" v-for="pedido in pedidos" :key="pedido.idPedido">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5>Detalles del Pedido #{{ pedido.idPedido }}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <strong>ID Cubo:</strong> {{ pedido.idCubo }}
                            </li>
                            <li class="list-group-item">
                                <strong>ID Pedido:</strong> {{ pedido.idPedido }}
                            </li>
                            <li class="list-group-item">
                                <strong>ID Usuario:</strong> {{ pedido.idUsuario }}
                            </li>
                            <li class="list-group-item">
                                <strong>Fecha del Pedido:</strong> {{pedido.fechaPedido }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService'
const authService= new AuthService();
export default {
    name: "ComprasComponent",
    data() {
        return {
            pedidos: []
        }
    },
    mounted(){
        if(authService.getToken){
            authService.verComprasUsuario().then(response=>{
                this.pedidos = response.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>