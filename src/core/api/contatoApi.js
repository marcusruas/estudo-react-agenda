const axios = require('axios')

const TodosContatos = axios.get('https://localhost:5001/api/ContatoApi')

export {
    TodosContatos
}