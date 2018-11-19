import axios from 'axios'

export default {
    getOtas() {
        return axios.get('/ota')
            .then (response => {
                return response.data
            })
    },
    getActiveOtas() {
        return axios.get('/ota?active=1')
            .then (response => {
                return response.data
            })
    },
    getNonActiveOtas() {
        return axios.get('/ota?active=0')
            .then (response => {
                return response.data
            })
    }
}
