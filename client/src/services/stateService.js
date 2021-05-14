import axios from 'axios'
//send request to the route file
export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            return response.data
        })
    },
    //function that will send Patch request
    setVisited(stateName, visited) {
        let data = { visited: visited }
        return axios.patch('/api/states/' + stateName, data).then(res => {
            return res.data
        })
    },
    //make request to new API route
    getOneState(stateName) {
        return axios.get(`/api/states/${stateName}`).then(response => {
            return response.data
        })
    }
}