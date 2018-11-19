import axios from 'axios'

export default {
    getNodes() {
        return axios.get('/node')
            .then (response => {
                return response.data
            })
    }

    
}
