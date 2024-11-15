import Global from "@/Global";
import axios from "axios";

export default class AuthService {

    tokenKey = 'authToken';
    api = Global.urlApiB;

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    setToken(token) {
        localStorage.setItem(this.tokenKey, token);
    }

    clearToken() {
        localStorage.removeItem(this.tokenKey);
    }




    login(email, password) {
        let url = this.api + "api/Manage/Login";
        return new Promise(resolve => {
            axios.post(url, {
                email: email,
                password: password
            }).then(response => {
                let token = response.data.response;
                this.setToken(token);
                resolve();
            })
        })
    }

    getUsuario() {
        let url = this.api + "api/Manage/PerfilUsuario";
        return axios.get(url, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.getToken()
            }
        })
    }

    verComprasUsuario(){
        let url = this.api + "api/Compra/ComprasUsuario";
        return axios.get(url, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.getToken()
            }
        })
    }

    enviarPedido(idCubo) {
        let url = this.api + "api/Compra/InsertarPedido/" + idCubo;
        return axios.post(url, "", {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.getToken()
            }
        })
    }
}