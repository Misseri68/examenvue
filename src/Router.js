import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue";
import MarcaComponent from "./components/MarcaComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import LoginComponent from "./components/auth/LoginComponent.vue";
import PerfilComponent from "./components/auth/PerfilComponent.vue";
import ComprasComponent from "./components/auth/ComprasComponent.vue";
import PedidoComponent from "./components/auth/PedidoComponent.vue";

const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    {
        path: '/cubos/:marca', component: MarcaComponent
    },
    {
        path: '/cubos/detalles/:id', component: DetallesComponent
    },
    {
        path: '/login', component: LoginComponent
    },
    {
        path: '/perfil', component: PerfilComponent
    },
    {
        path: '/compras', component: ComprasComponent
    },
    {
        path: '/compras/pedido', component: PedidoComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;