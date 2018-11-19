import axios from 'axios'

export default {
    getCardReaders() {
        return axios.get('/plugins/7')
            .then (response => {
                return response.data
            })
    }
}
