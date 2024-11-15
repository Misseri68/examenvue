<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Inicia Sesión</h2>
                        <form class="form" v-on:submit.prevent="login()">
                            <div class="mb-3">
                                <label for="user" class="form-label">Email</label>
                                <input type="text" v-model="user" id="user" class="form-control" placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Contraseña</label>
                                <input type="password" v-model="pwd" id="pwd" class="form-control"
                                    placeholder="Contraseña">
                            </div>
                            <button type="submit" class="btn btn-success w-100">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import AuthService from '@/services/AuthService'
const servicioAuth = new AuthService();
export default {

    name: "LoginComponent",
    data() {
        return {
            user: "",
            pwd: ""
        }
    },
    methods: {
        login() {
            servicioAuth.login(this.user, this.pwd).then(
                this.$router.push("/")
            )
        }
    }
}
</script>

<style lang="scss" scoped></style>