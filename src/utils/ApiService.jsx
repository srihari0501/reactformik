import axios from 'axios'
const API_URL = "https://6650a5d3ec9b4a4a6032dd9d.mockapi.io"

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService