<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link ">Home</router-link>
                        </li>
                        <li class="nav-item dropdown ms-5">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Marcas</a>
                            <ul class="dropdown-menu">
                                <li v-for="marca in marcas" :key="marca">
                                    <router-link class="dropdown-item" :to="'/cubos/' + marca">
                                        {{ marca }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav ">
                        
                        <li class="nav-item">
                            <router-link to="/perfil" class="nav-link ">Mi Perfil</router-link>
                        </li>
                  
               
                        <li class="nav-item">
                            <router-link to="/compras" class="nav-link ">Mis compras</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link ">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <a @click="logout()" class="nav-link ">Log out</a>
                        </li>
                    </ul>
                   
                        
               
                </div>
            </div>
        </nav>

    </div>
</template>


<script>
    import CubosService from "@/services/CubosService";
import AuthService from '@/services/AuthService';
    const service = new CubosService();
    const authService = new AuthService();


    export default {
        name: "MenuComponent",
        data() {
            return {
                marcas: [],
            }
        },
        mounted() {
           service.getMarcas().then(marcas => {
               this.marcas = marcas;
           })
        },
        methods: {
            logout(){
                authService.clearToken();
                this.$router.push("/");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>