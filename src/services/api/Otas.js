import axios from 'axios'

export default {
    getOtas() {
        return axios.get('/ota')
            .then (response => {
                return response.data
            })
    }
}
