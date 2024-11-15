<template>
    <div>
        <h3>Nombre: {{ user.nombre }}</h3>
        <h3>Email: {{ user.email }}</h3>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService';
const servicioAuth = new AuthService();
export default {
    name: "PerfilComponent",
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        if (!servicioAuth.getToken()) {
            this.$router.push("/login");
        } else {
            servicioAuth.getUsuario().then(response => {
                this.user = response.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>