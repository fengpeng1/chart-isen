import axios from 'axios'

export default {
    getNodes() {
        return axios.get('/node')
            .then (response => {
                return response.data
            })
    },
    getNodeByMac(mac) {
        return axios.get('/node/' + mac)
            .then (response => {
                return response.data
            })
    }
}
