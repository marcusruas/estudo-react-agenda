const axios = require('axios')

buscarTodosContratos = axios.get('https://localhost:5001/api/ContatoApi')

export default {
    todosContratos
}