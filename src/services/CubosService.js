import Global from "@/Global";
import axios from "axios";

export default class CubosService {
    api = Global.urlApiB;

    getCubo(idCubo){
        let url = this.api + 'api/cubos/' + idCubo;
        return new Promise(
            (resolve) => {
                axios.get(url).then(response =>{
                    resolve(response.data)
                })
            }
        )
    }

    getCubos() {
        let url = this.api + 'api/cubos';
        return new Promise(
            (resolve) => {
                axios.get(url).then(response => {
                    resolve(response.data);
                })
            })
    }

    getMarcas() {
        return new Promise(
            (resolve) => {
                let url = this.api + 'api/cubos/marcas';
                axios.get(url).then(response=>{
                    resolve(response.data);
                })
            })
    }

    getCubosMarcas(marca){
        return new Promise(
            (resolve) => {
                let url = this.api + 'api/Cubos/CubosMarca/' + marca;
                axios.get(url).then(response=>{
                    resolve(response.data);
                })
            })
    }

    getComentarios(idCubo){
        let url = this.api + "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
        console.log(url)
        return new Promise(
            (resolve) =>{
                axios.get(url).then(response=>{
                    resolve(response.data);
                })
            }
        )
    }


}